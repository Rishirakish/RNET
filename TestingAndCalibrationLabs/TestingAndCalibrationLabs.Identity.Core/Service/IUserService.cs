using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Domain;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public interface IUserService
    {
        Task<string> CreateUser(User user, string password);
        Task<SessionContext> UserLogin(string username, string password);
        Task<bool> UserLogout(string userid, string token);

        Task<bool> ValidateUser(string token);
    }
}
