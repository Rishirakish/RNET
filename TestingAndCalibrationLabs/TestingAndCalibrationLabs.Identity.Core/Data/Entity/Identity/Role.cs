using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity
{
    public class Role : IdentityRole
    {
        public Role()
        {
        }

        public Role(string roleName) : base(roleName)
        {
        }
    }
}
