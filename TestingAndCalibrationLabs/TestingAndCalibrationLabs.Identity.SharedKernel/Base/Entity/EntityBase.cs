/* This is an abstract class which implements the IEntityBase interface
 * We have overriden the Equals to compare two entity.
 */

namespace TestingAndCalibrationLabs.Identity.SharedKernel.Base.Entity
{
    public abstract class EntityBase<TId> : IEntityBase<TId>
    {
        public virtual TId Id { get; protected set; }

        public override bool Equals(object obj)
        {
            if (obj == null || !(obj is EntityBase<TId>))
                return false;

            if (ReferenceEquals(this, obj))
                return true;

            if (GetType() != obj.GetType())
                return false;

            var item = (EntityBase<TId>)obj;

            return this == item;
        }

        public override int GetHashCode()
        {
            return (GetType().ToString() + Id).GetHashCode();
        }

        public static bool operator ==(EntityBase<TId> left, EntityBase<TId> right)
        {
            if (Equals(left, null))
                return Equals(right, null) ? true : false;
            else
                return left.Equals(right);
        }

        public static bool operator !=(EntityBase<TId> left, EntityBase<TId> right)
        {
            return !(left == right);
        }
    }
}
