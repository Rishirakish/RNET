using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core.Service;
using TestingAndCalibrationLabs.Identity.RestApi.DTO;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ConventionalAuthenticationController : ControllerBase
    {
        private readonly IConventionalAuthenticationService _conventionalAuthenticationService;

        public ConventionalAuthenticationController(IConventionalAuthenticationService conventionalAuthenticationService)
        {
            _conventionalAuthenticationService = conventionalAuthenticationService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<int>> Register(LoginModel login)
        {
            var result = await _conventionalAuthenticationService.Add(login.UserName, login.Password);
            return result;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<string>> Login(LoginModel login)
        {
            var result = await _conventionalAuthenticationService.Login(login.UserName, login.Password);
            return result;
        }
    }
}
