using System.ComponentModel.DataAnnotations.Schema;
using TestingAndCalibrationLabs.FrontOffice.Core;

namespace TestingAndCalibrationLabs.FrontOffice.Infrastructure
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
