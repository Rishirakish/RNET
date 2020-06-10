/* This is the base entity configuration which inherits EntityTypeConfiguration
 * This class should be inherited if we want to make any configuration to the entity using fluent API's
 */

using System.Data.Entity.ModelConfiguration;

namespace TestingAndCalibrationLabs.Identity.SharedKernel.Base.EntityConfiguration
{
    public abstract class BaseEntityConfiguration<TEntity> : EntityTypeConfiguration<TEntity> where TEntity : Entity.Entity
    {
    }
}
