using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.RestApi.DTO
{
    public class LogoutModel
    {
        public string UserId { get; set; }
        public string Token { get; set; }
    }
}
