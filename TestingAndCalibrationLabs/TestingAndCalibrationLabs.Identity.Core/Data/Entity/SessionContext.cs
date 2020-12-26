using System;
using System.Collections.Generic;
using System.Text;

namespace TestingAndCalibrationLabs.Identity.Core.Data.Entity
{
    public class SessionContext
    {
        public string SessionToken { get; set; }
        public int UserId { get; set; }
    }
}
