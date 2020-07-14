using System.Data.Entity.ModelConfiguration;
using TestingAndCalibrationLabs.FrontOffice.Core;

namespace TestingAndCalibrationLabs.FrontOffice.Infrastructure
{
    /// <summary>
    /// This is the base entity configuration which inherits EntityTypeConfiguration
    ///This class should be inherited if we want to make any configuration to the entity using fluent API's
    /// </summary>
    public abstract class BaseEntityConfiguration<TEntity> : EntityTypeConfiguration<TEntity> where TEntity : Entity
    {
    }
}
