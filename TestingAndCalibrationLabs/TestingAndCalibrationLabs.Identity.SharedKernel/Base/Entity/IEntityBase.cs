/* This is the base interface for the entity.
 * 
 */

namespace TestingAndCalibrationLabs.Identity.SharedKernel.Base.Entity
{
    internal interface IEntityBase<TId>
    {
        TId Id { get; }
    }
}
