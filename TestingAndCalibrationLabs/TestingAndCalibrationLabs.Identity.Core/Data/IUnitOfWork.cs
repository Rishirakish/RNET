using System;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.Core
{
    public interface IUnitOfWork<TEntity>: IDisposable where TEntity : class, IEntityBase //, DbContext
    {
        Task<int> SaveChangesAsync();

        IRepository<TEntity> Repository { get; }
    }
}
