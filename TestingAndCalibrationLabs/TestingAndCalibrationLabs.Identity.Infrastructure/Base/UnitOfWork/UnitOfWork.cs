/* This is the generic UoW pattern i.e. Unit of Work pattern.
 * We have use this for commiting the changes to the db
 */


using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    public class UnitOfWork : Disposable, IUnitOfWork
    {
        protected readonly BaseDbContext _dbContext;
        //private Repository<TEntity> _repository;
        
        public UnitOfWork(BaseDbContext context)
        {
            _dbContext = context;
        }

        //public IRepository<TEntity> Repository
        //{
        //    get { return _repository ??= new Repository<TEntity>(_dbContext); }
        //}

        public IRepository<TEntity> GetRepository<TEntity>() where TEntity : class, IEntityBase
        {
            return new Repository<TEntity>(_dbContext);
        }

        public virtual async Task<int> SaveChangesAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        protected override void DisposeCore()
        {
            _dbContext?.Dispose();
        }
    }
}
