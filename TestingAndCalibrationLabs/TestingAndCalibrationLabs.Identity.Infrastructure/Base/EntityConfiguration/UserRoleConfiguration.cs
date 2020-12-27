using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.Base.EntityConfiguration
{
    internal class UserRoleConfiguration : IBaseEntityConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.ToTable("UserRole");
        }
    }
}
