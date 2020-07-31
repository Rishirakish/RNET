using Microsoft.EntityFrameworkCore;
using TestingAndCalibrationLabs.Identity.Core;
using TestingAndCalibrationLabs.Identity.Infrastructure.Base.EntityConfiguration;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    public class ApplicationDbContext : BaseDbContext
    {
   
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //modelBuilder.ApplyConfiguration(new SampleEntityConfiguration());
            modelBuilder.ApplyConfiguration(new UserClaimConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new RoleClaimConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
            modelBuilder.ApplyConfiguration(new UserTokenConfiguration());
            modelBuilder.ApplyConfiguration(new UserLoginConfiguration());

        }

        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }
    }
}
