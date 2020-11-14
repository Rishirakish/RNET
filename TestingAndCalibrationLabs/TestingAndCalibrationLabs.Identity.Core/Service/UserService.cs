using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Domain;

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

        public async Task<SessionContext> UserLogin(string username, string password)
        {
            var res = await _signInManager.PasswordSignInAsync(username, password, false, false).ConfigureAwait(true);
            SessionContext usertoken = null;
            if (res.Succeeded)
            {
                var userP = await _userManager.FindByNameAsync(username);
                var token = await _userManager.GenerateUserTokenAsync(userP, "CustomTokenProvider", "Login").ConfigureAwait(true);
                // Experimenting some methods

                /*var vool1 = _userManager.SupportsUserAuthenticationTokens;
                var userValidator = new UserValidator<User>();
                var bb = ValidateUserName(_userManager, userP, new List<IdentityError>());
                var aaa = await userValidator.ValidateAsync(_userManager, userP);*/

                //Save token in database
                //var abc = await _userManager.SetAuthenticationTokenAsync(userP, "CustomTokenProvider", username, token).ConfigureAwait(true);
                /*if (abc.Succeeded)
                {*/
                    usertoken = new SessionContext()
                    {
                        SessionToken =  token,
                        UserID = userP.Id
                    };
                    //Users before to have userid and toke before jwt was implemented
                    /*var dict = new Dictionary<string, string> {{userP.Id, token}};
                    string json = JsonConvert.SerializeObject(dict, Formatting.None);
                    byte[] bytes = Encoding.UTF8.GetBytes(json);
                    usertoken = Convert.ToBase64String(bytes);*/
                //}
            }

            return usertoken;
        }

        public async Task<bool> UserLogout(string userid, string token)
        {
            var user = await _userManager.FindByIdAsync(userid).ConfigureAwait(true);
            var res = await _userManager.RemoveAuthenticationTokenAsync(user, "CustomTokenProvider", user.UserName).ConfigureAwait(true);
            return res.Succeeded;
        }

        public async Task<bool> ValidateUser(string token)
        {
            byte[] bytes = Convert.FromBase64String(token);
            string json = Encoding.UTF8.GetString(bytes);
            Dictionary<string, string> deserializedDict = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
            User user = await _userManager.FindByIdAsync(deserializedDict.Keys.First());
            var res = await _userManager.VerifyUserTokenAsync(user, "CustomTokenProvider", "Login",deserializedDict.Values.First());
            return res;
        }

        private async Task ValidateUserName(UserManager<User> manager, User user, ICollection<IdentityError> errors)
        {
            var userName = await manager.GetUserNameAsync(user);
            if (string.IsNullOrWhiteSpace(userName))
            {
                //errors.Add(Describer.InvalidUserName(userName));
            }
            else if (!string.IsNullOrEmpty(manager.Options.User.AllowedUserNameCharacters) &&
                     userName.Any(c => !manager.Options.User.AllowedUserNameCharacters.Contains(c)))
            {
                //errors.Add(Describer.InvalidUserName(userName));
            }
            else
            {
                var owner = await manager.FindByNameAsync(userName);
                var a = await manager.GetUserIdAsync(owner);
                var b = await manager.GetUserIdAsync(user);
                if (owner != null &&
                    !string.Equals(a, b))
                {
                   // errors.Add(Describer.DuplicateUserName(userName));
                }
            }
        }
    }
}
