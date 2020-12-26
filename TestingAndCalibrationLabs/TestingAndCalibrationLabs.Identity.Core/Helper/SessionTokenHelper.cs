using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using TestingAndCalibrationLabs.Identity.Core.Utility;
using TestingAndCalibrationLabs.Identity.Core.Utility.ExtensionMethods;

namespace TestingAndCalibrationLabs.Identity.Core.Helper
{
    public static class SessionTokenHelper
    {
        public static string CreateSessionToken(string userName)
        {
            string baseToken = CreateBaseToken(userName);

            uint hash = userName.ComputeChecksum();
            return SessionTokenMesh.Mesh(baseToken, hash);
        }

        private static string CreateBaseToken(string userName)
        {
            byte[] randomBytes = new byte[32];
            using (RNGCryptoServiceProvider cryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                cryptoServiceProvider.GetNonZeroBytes(randomBytes);
            }

            string token = userName + DateTime.Now.Ticks + BitConverter.ToString(randomBytes);
            string tokenStr = BitConverter.ToString(HashProvider.CreateSHA256HashForGuid(token));

            return tokenStr.Replace("-", "");
        }
    }
}
