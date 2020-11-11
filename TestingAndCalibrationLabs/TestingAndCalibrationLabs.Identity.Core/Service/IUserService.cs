using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public interface IUserService
    {
        Task<string> CreateUser(User user, string password);
        Task<string> UserLogin(string username, string password);
        Task<bool> UserLogout(string userid, string token);

        Task<bool> ValidateUser(string token);
    }
}
