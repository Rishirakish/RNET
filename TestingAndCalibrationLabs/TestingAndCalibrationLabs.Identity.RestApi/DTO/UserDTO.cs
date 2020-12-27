using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.RestApi.DTO
{
    public class UserDTO
    {
        public User User { get; set; }
        public string Password { get; set; }
    }
}
