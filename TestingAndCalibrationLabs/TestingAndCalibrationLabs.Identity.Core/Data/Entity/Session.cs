using System;
using System.Collections.Generic;
using System.Text;

namespace TestingAndCalibrationLabs.Identity.Core
{
    public class Session : Entity
    {
        public int UserId { get; set; }
        public string SessionToken { get; set; }
    }
}
