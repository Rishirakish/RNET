using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public interface IUserService
    {
        Task<bool> RegisterUser(User user, string password);
        Task<JWTToken> UserLogin(string username, string password);
        Task<bool> RegisterAdmin(User user, string password);
    }
}
