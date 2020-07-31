using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Service;
using TestingAndCalibrationLabs.Identity.RestApi.DTO;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ISampleService _sampleService;

        public UserController(IUserService userService, ISampleService sampleService)
        {
            _userService = userService;
            _sampleService = sampleService;
        }

        [HttpPost]
        [Route("create")]
        public async Task<ActionResult<string>> Create(UserDTO user)
        {
            var result = await _userService.CreateUser(user.User, user.Password).ConfigureAwait(true);
            return result;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<bool>> Login(LoginModel login)
        {
            var result = await _userService.UserLogin(login.UserName, login.Password);
            return result;
        }
    }
}
