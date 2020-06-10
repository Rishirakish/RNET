using System.ComponentModel.DataAnnotations.Schema;
using TestingAndCalibrationLabs.Identity.Core.Entity;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.EntityConfiguration;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.EntityConfiguration
{
    internal class SampleEntityConfiguration : BaseEntityConfiguration<SampleEntity>
    {
        public SampleEntityConfiguration()
        {
            ToTable("SampleTable");
            Property(p => p.Name)
                .HasMaxLength(50);
            Property(p => p.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            HasKey(p => p.Id);
        }
    }
}
