using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using System.Text.RegularExpressions;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public class CertificateManager : ICertificateManager
    {
        public X509Certificate2 GetCertificate(string thumbprint)
        {
            // strip any non-hexadecimal values and make uppercase
            thumbprint = Regex.Replace(thumbprint, @"[^\da-fA-F]", string.Empty).ToUpper();
            X509Certificate2 signingCertRes = null;
            try
            {
                using var store = new X509Store(StoreName.My, StoreLocation.LocalMachine);
                store.Open(OpenFlags.ReadOnly);

                var certCollection = store.Certificates;
                var signingCert = certCollection.Find(X509FindType.FindByThumbprint, thumbprint, false);
                if (signingCert.Count == 0)
                {
                    throw new FileNotFoundException(
                        $"Cert with thumbprint: '{thumbprint}' not found in local machine cert store.");
                }

                signingCertRes = signingCert[0];
            }
            catch (Exception)
            {
                // ignored
            }
            return signingCertRes;
        }
    }
}
