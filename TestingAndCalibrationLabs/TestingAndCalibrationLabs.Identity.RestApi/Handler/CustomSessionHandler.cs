using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using TestingAndCalibrationLabs.Identity.Core.Common;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity;
using TestingAndCalibrationLabs.Identity.Core.Service;

namespace TestingAndCalibrationLabs.Identity.RestApi
{
    public class CustomSessionHandler : DelegatingHandler
    {
        public const string WEB_API_MESSAGE = "WebApi:";
        public const string WEB_API_EMPTY_SESSION_TOKEN = WEB_API_MESSAGE + "WebApiEmptySessionToken";
        public const string WEB_API_INVALID_SESSION_TOKEN = WEB_API_MESSAGE + "WebApiInvalidSessionToken";
        public CustomSessionHandler(IHttpContextAccessor contextAccessor, IConventionalAuthenticationService authService)
        {
            _contextAccessor = contextAccessor;
            _authService = authService;
        }

        #region Private Properties
        public string QualifiedName => GetType().AssemblyQualifiedName;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IConventionalAuthenticationService _authService;
        #endregion Private Properties

        #region Overrriden Methods

        /// <summary>
        /// Sends an HTTP request to the inner handler to send to the server as an asynchronous operation.
        /// This request will unpack the auth header in the current request to find the session token.  It will then 
        /// validate this session token and place the resulting SessionContext in the Properties collection of the
        /// current request for later use in the processing pipeline.
        /// </summary>
        /// <param name="request">The HTTP request message to send to the server.</param>
        /// <param name="cancellationToken">A cancellation token to cancel operation.</param>
        /// <returns>
        /// Returns <see cref="T:System.Threading.Tasks.Task`1"/>. The task object representing the asynchronous operation.
        /// </returns>
        /// <exception cref="T:System.ArgumentNullException">The <paramref name="request"/> was null.</exception>
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            //Need better approach here
            if (request.RequestUri.AbsolutePath.EndsWith("ConventionalAuthentication/Login", StringComparison.OrdinalIgnoreCase))
            {
                return base.SendAsync(request, cancellationToken);
            }

            Task<HttpResponseMessage> result;
            string sessionToken;

            RequestResult<string> sessionRequestResult = RetrieveSessionFromHeader(request);
            if (sessionRequestResult.IsSuccessful)
            {
                sessionToken = sessionRequestResult.RequestedObject;
            }
            else
            {
                return GetErrorTask(HttpStatusCode.Unauthorized, sessionRequestResult.ValidationMessages[0].Description);
            }
            if (sessionToken.Contains("\""))
            {
                sessionToken = sessionToken.Replace("\"", null);
            }
            SessionContext session = ValidateSession(sessionToken);

            if (session == null)
            {
                result = GetErrorTask(HttpStatusCode.Unauthorized, "Invalid session token.");
            }
            else
            {
                request.Properties[ApiConstants.SESSION_ID_TOKEN] = session;

                bool fromCookie = HasSessionCookie();
                result = base.SendAsync(request, cancellationToken);

                if (_contextAccessor.HttpContext.Response != null && !fromCookie)
                {
                    _contextAccessor.HttpContext.Response.Cookies.Delete(ApiConstants.AUTHENTICATION_COOKIE);
                }
            }
            return result;
        }

        #endregion Overriden Methods

        #region Private Methods

        internal RequestResult<string> RetrieveSessionFromHeader(HttpRequestMessage request)
        {
            RequestResult<string> result = new RequestResult<string>();
            bool hasAuthHeader = HasAuthHeader(request);
            bool hasSessionCookie = HasSessionCookie();
            if (!hasAuthHeader && !hasSessionCookie)
            {
                result.ValidationMessages = new List<ValidationMessage>
                {
                    new ValidationMessage(WEB_API_EMPTY_SESSION_TOKEN, QualifiedName,"Empty session token in the header.",ValidationSeverity.Error, "Empty session token in the header.")
                };
            }

            else if (hasAuthHeader)
            {
                string[] sessionTokenParts = request.Headers.Authorization.Parameter.Split(ApiConstants.AUTH_HEADER_SEPARATOR);
                if (sessionTokenParts.Length != 2)
                {
                    result.ValidationMessages = new List<ValidationMessage>
                    {
                        new ValidationMessage(WEB_API_INVALID_SESSION_TOKEN, QualifiedName,"Invalid session token.",ValidationSeverity.Error, "Invalid session token.")
                    };
                }
                else
                {
                    result.RequestedObject = sessionTokenParts[1];
                }
            }
            else
            {
                _contextAccessor.HttpContext.Request.Cookies.TryGetValue(ApiConstants.AUTHENTICATION_COOKIE,
                    out var value);
                result.RequestedObject = value;

            }

            return result;
        }

        /// <summary>
        /// Creates a SessionContext for a user session given the sessionToken of a valid session.
        /// </summary>
        /// <param name="sessionToken">The session token.</param>
        /// <returns></returns>
        private SessionContext ValidateSession(string sessionToken)
        {
            SessionContext sessionContext;

            try
            {
                var validateSessionResult = _authService.ValidateSessionToken(sessionToken);

                if (validateSessionResult.Result.ValidationMessages != null && validateSessionResult.Result.ValidationMessages.Count > 0)
                {
                    throw new Exception("Invalid session token.");
                }

                sessionContext = validateSessionResult.Result.RequestedObject;
            }
            catch (Exception)
            {
                sessionContext = null;
            }

            return sessionContext;
        }

        /// <summary>
        /// The Task that builds an HTTP error response. 
        /// </summary>
        /// <param name="statusCode">Status code</param>
        /// <param name="reason">The reason to be added to the HTTP response message.</param>
        /// <returns></returns>
        private Task<HttpResponseMessage> GetErrorTask(HttpStatusCode statusCode, string reason)
        {
            var response = new HttpResponseMessage(statusCode) { ReasonPhrase = reason };
            response.Headers.Add(ApiConstants.CHALLENGE_AUTH_HEADER_NAME, ApiConstants.AUTHENTICATION_SCHEME);
            var tsc = new TaskCompletionSource<HttpResponseMessage>();
            tsc.SetResult(response);
            return tsc.Task;
        }

        private bool HasAuthHeader(HttpRequestMessage request)
        {
            return request.Headers.Authorization != null
                && request.Headers.Authorization.Scheme == ApiConstants.AUTHENTICATION_SCHEME
                && !string.IsNullOrEmpty(request.Headers.Authorization.Parameter);
        }

        private bool HasSessionCookie()
        {
            return _contextAccessor.HttpContext.Request.Cookies.TryGetValue(ApiConstants.AUTHENTICATION_COOKIE, out _);
        }

        #endregion Private Methods
    }
}
