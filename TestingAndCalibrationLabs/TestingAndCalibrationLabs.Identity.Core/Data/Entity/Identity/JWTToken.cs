using System;
using System.Collections.Generic;
using System.Text;

namespace TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity
{
    public class JWTToken
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
