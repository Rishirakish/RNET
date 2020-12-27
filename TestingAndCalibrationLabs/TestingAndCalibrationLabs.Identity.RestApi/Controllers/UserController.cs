using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Service;
using TestingAndCalibrationLabs.Identity.RestApi.DTO;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers
{
    [ApiController]
    [Route("security")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("register/user")]
        public async Task<ActionResult<bool>> RegisterUser(UserDTO user)
        {
            var result = await _userService.RegisterUser(user.User, user.Password).ConfigureAwait(true);
            return result;
        }

        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        [Route("register/admin")]
        public async Task<ActionResult<bool>> RegisterAdmin(UserDTO user)
        {
            var result = await _userService.RegisterAdmin(user.User, user.Password).ConfigureAwait(true);
            return result;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<JWTToken>> Login(LoginModel login)
        {
            var result = await _userService.UserLogin(login.UserName, login.Password);
            return result;
        }
    }
}
