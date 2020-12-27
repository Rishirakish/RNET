using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    internal class UserLoginConfiguration : IBaseEntityConfiguration<UserLogin>
    {
        public void Configure(EntityTypeBuilder<UserLogin> builder)
        {
            builder.ToTable("UserLogin");
        }
    }
}
