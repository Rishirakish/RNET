using System.Data.Entity;
using TestingAndCalibrationLabs.FrontOffice.Core;

namespace TestingAndCalibrationLabs.FrontOffice.Infrastructure
{
    public class ApplicationDbContext : BaseDbContext
    {
        //TODO: The connection string should come from config file
        public ApplicationDbContext() : base("Data Source=localhost;Initial Catalog=RNET;Persist Security Info=True;User ID=sa;Password=admin;MultipleActiveResultSets=True")
        {
            
        }
        public DbSet<SampleEntity> SampleEntities { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new SampleEntityConfiguration());
        }
    }
}
