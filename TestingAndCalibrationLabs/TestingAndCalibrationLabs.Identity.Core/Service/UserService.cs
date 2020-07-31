using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UserService(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }


        public async Task<string> CreateUser(User user, string password)
        {
            IdentityResult res = await _userManager.CreateAsync(user, password).ConfigureAwait(true);
            return res.Succeeded ? user.Id : null;
        }

        public async Task<bool> UserLogin(string username, string password)
        {
            var res = await _signInManager.PasswordSignInAsync(username, password, false, false).ConfigureAwait(true);
            return res.Succeeded;
        }
    }
}
