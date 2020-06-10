/* This is the generic UoW pattern i.e. Unit of Work pattern.
 * We have use this for commiting the changes to the db
 */


using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.DBContext;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.UnitOfWork;
using TestingAndCalibrationLabs.Identity.SharedKernel.Disposable;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.UnitOfWork
{
    public class UnitOfWork<TContext> : Disposable, IUnitOfWork<TContext> where TContext : BaseDbContext, new()
    {
        protected readonly BaseDbContext _dbContext;

        public UnitOfWork()
        {
            _dbContext = new TContext();
        }

        public UnitOfWork(TContext context)
        {
            _dbContext = context;
        }

        public virtual async Task<int> CommitAsync()
        {
            return await _dbContext.SaveChangesAsync();
        }

        protected override void DisposeCore()
        {
            _dbContext?.Dispose();
        }
    }
}
