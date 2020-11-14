using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Domain;
using TestingAndCalibrationLabs.Identity.Core.Service;

namespace TestingAndCalibrationLabs.Identity.RestApi.CustomHandlers
{
    public class CustomTokenProvider<TUser> : DataProtectorTokenProvider<TUser> where TUser : class
    {
        private readonly ICertificateManager _certificateManager;
        private readonly AppSettings _appSettings;
        
        public CustomTokenProvider(IDataProtectionProvider dataProtectionProvider, IOptions<CustomTokenProviderOptions> options, ILogger<DataProtectorTokenProvider<TUser>> logger, ICertificateManager certificateManager, IOptions<AppSettings> appSettings  ) : base(dataProtectionProvider, options, logger)
        {
            _certificateManager = certificateManager;
            _appSettings = appSettings.Value;
        }

        public override Task<string> GenerateAsync(string purpose, UserManager<TUser> manager, TUser user)
        {
            var certificate = _certificateManager.GetCertificate(_appSettings.JWTSigningCertificateThumbprint);
            RSA rsaPrivateKey = certificate.GetRSAPrivateKey();
            var privateSecurityKey = new RsaSecurityKey(rsaPrivateKey);
            var subject = GenerateClaimsIdentity(user as User);
            var descriptor = new SecurityTokenDescriptor
            {
                Issuer = "T & C",
                Audience = "T & C",
                IssuedAt = DateTime.UtcNow,
                NotBefore = DateTime.UtcNow,
                Expires = DateTime.UtcNow.AddMinutes(5),
                Subject = subject,//new ClaimsIdentity(new List<Claim> { new Claim("sub", "scott") }),
                SigningCredentials = new SigningCredentials(privateSecurityKey, SecurityAlgorithms.RsaSha256Signature)
            };
            var handler = new JsonWebTokenHandler();

            // 2. create the token
            string jwt = handler.CreateToken(descriptor);
            return Task.FromResult(jwt);
            //return base.GenerateAsync(purpose, manager, user);
        }

        private static ClaimsIdentity GenerateClaimsIdentity(User user)
        {
            IList<Claim> claims = new List<Claim>();
            claims.Add(new Claim("UserId",user.Id));
            return new ClaimsIdentity(claims);
        }
    }
}
