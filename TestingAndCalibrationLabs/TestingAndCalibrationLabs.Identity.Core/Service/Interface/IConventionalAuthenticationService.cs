using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Common;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public interface IConventionalAuthenticationService
    {
        Task<int> Add(string username, string password);
        Task<string> Login(string username, string password);
        Task<RequestResult<SessionContext>> ValidateSessionToken(string sessionToken);
    }
}
