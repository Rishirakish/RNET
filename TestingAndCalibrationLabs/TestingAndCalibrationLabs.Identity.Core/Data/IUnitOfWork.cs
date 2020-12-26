using System;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.Core
{
    public interface IUnitOfWork: IDisposable //, DbContext
    {
        Task<int> SaveChangesAsync();

        IRepository<TEntity> GetRepository<TEntity>() where TEntity : class, IEntityBase;

        //IRepository<TEntity> Repository { get; }
    }
}
