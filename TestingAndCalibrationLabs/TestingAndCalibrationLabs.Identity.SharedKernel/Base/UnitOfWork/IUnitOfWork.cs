using System;
using System.Data.Entity;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.SharedKernel.Base.UnitOfWork
{
    public interface IUnitOfWork<TContext> : IDisposable where TContext : DbContext, IDisposable
    {
        Task<int> CommitAsync();
    }
}
