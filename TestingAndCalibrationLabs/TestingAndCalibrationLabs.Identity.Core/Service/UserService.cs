using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IConfiguration _configuration;

        public UserService(UserManager<User> userManager
            , RoleManager<Role> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }


        public async Task<bool> RegisterUser(User user, string password)
        {
            var userExists = await _userManager.FindByNameAsync(user.UserName);
            if (userExists != null)
                return false;

            User usr = new User()
            {
                Email = user.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = user.UserName
            };
            var result = await _userManager.CreateAsync(usr, password).ConfigureAwait(true);

            return result.Succeeded;
        }
        public async Task<bool> RegisterAdmin(User user, string password)
        {
            var userExists = await _userManager.FindByNameAsync(user.UserName);
            if (userExists != null)
                return false;

            User usr = new User()
            {
                Email = user.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = user.UserName
            };
            var result = await _userManager.CreateAsync(usr, password);

            if (!result.Succeeded)
                return false;

            if (!await _roleManager.RoleExistsAsync(UserRoles.Admin))
                await _roleManager.CreateAsync(new Role(UserRoles.Admin));
            if (!await _roleManager.RoleExistsAsync(UserRoles.User))
                await _roleManager.CreateAsync(new Role(UserRoles.User));

            if (await _roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                var res = await _userManager.AddToRoleAsync(user, UserRoles.Admin).ConfigureAwait(true);
                return res.Succeeded;
            }

            return false;
        }
        public async Task<JWTToken> UserLogin(string username, string password)
        {
            var user = await _userManager.FindByNameAsync(username);

            if (user != null && await _userManager.CheckPasswordAsync(user, password))
            {
                var userRoles = await _userManager.GetRolesAsync(user);


                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );
                return new JWTToken
                {
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                    Expiration = token.ValidTo
                };
            }
            return null;
        }
    }
}
