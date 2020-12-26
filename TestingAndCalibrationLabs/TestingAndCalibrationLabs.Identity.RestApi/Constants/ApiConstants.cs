using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.RestApi
{
	public class ApiConstants
    {
        public const char AUTH_HEADER_SEPARATOR = '=';
        public const string SESSION_ID_TOKEN = "session-id";
        public const string AUTHENTICATION_COOKIE = "__TAndCSessionCookie__";
        public const string AUTHENTICATION_SCHEME = "TAndC";
        public const string CHALLENGE_AUTH_HEADER_NAME = "WWW-Authenticate";
        public const string ANTI_FORGERY_TOKEN = "X_CSRF_TOKEN";

    }
}
