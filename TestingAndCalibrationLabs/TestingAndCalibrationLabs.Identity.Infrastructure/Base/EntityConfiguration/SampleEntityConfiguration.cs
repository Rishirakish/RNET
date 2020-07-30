using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TestingAndCalibrationLabs.Identity.Core;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    internal class SampleEntityConfiguration : IBaseEntityConfiguration<SampleEntity>
    {
       public void Configure(EntityTypeBuilder<SampleEntity> builder)
        {
            builder.ToTable("SampleTable");
            builder.Property(p => p.Name)
                .HasMaxLength(50);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.HasKey(p => p.Id);
        }
    }
}
