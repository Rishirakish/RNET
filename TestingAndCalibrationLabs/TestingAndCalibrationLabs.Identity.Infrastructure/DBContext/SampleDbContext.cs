using System.Data.Entity;
using TestingAndCalibrationLabs.Identity.Core.Entity;
using TestingAndCalibrationLabs.Identity.Infrastructure.EntityConfiguration;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.DBContext;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.DBContext
{
    public class SampleDbContext : BaseDbContext
    {
        //TODO: The connection string should come from config file
        public SampleDbContext() : base("Data Source=localhost;Initial Catalog=RNET;Persist Security Info=True;User ID=sa;Password=Rsa@2bsafe;MultipleActiveResultSets=True")
        {
            
        }
        public DbSet<SampleEntity> SampleEntities { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new SampleEntityConfiguration());
        }
    }
}
