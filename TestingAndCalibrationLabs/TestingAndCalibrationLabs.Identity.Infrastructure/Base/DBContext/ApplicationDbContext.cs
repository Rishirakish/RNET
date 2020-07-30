using Microsoft.EntityFrameworkCore;
using TestingAndCalibrationLabs.Identity.Core;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    public class ApplicationDbContext : BaseDbContext
    {
        //TODO: The connection string should come from config file
       public DbSet<SampleEntity> SampleEntities { get; set; }

       public DbSet<SampleEntity> SampleEntities2 { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new SampleEntityConfiguration());
        }
    }
}
