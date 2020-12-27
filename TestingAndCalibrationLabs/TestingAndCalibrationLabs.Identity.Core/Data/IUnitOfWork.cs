using System;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.Core
{
    public interface IUnitOfWork: IDisposable //where TEntity : class, IEntityBase //, DbContext
    {
        Task<int> SaveChangesAsync();

        //IRepository<TEntity> Repository { get; }
        IRepository<TEntity> GetRepository<TEntity>() where TEntity : class, IEntityBase;
    }
}
