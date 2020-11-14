using System.Security.Cryptography.X509Certificates;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public interface ICertificateManager
    {
        X509Certificate2 GetCertificate(string thumbprint);
    }
}
