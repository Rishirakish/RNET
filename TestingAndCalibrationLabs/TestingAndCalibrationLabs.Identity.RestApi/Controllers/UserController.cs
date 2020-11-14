using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core;
using TestingAndCalibrationLabs.Identity.Core.Domain;
using TestingAndCalibrationLabs.Identity.Core.Service;
using TestingAndCalibrationLabs.Identity.RestApi.Controllers.Base;
using TestingAndCalibrationLabs.Identity.RestApi.DTO;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ApiController
    {
        private readonly IUserService _userService;
        private readonly ISampleService _sampleService;

        public UserController(IUserService userService, ISampleService sampleService)
        {
            _userService = userService;
            _sampleService = sampleService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<string>> Create(UserDTO user)
        {
            var result = await _userService.CreateUser(user.User, user.Password).ConfigureAwait(true);
            return result;
        }

        //[Authorize(AuthenticationSchemes = "Basic")]
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<SessionContext>> Login(LoginModel login)
        {
            var result = await _userService.UserLogin(login.UserName, login.Password);
            return result;
        }

        [Authorize(AuthenticationSchemes = "Basic")]
        [HttpPost]
        [Route("logout")]
        public async Task<bool> Logout(LogoutModel logout)
        {
            var result = await _userService.UserLogout(logout.UserId, logout.Token);
            return result;
        }

    }
}
