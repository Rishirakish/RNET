using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.DBContext;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.Entity;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.Repository;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.Specification;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.Repository
{
    public class Repository<T> : IRepository<T> where T : Entity
    {
        private readonly BaseDbContext _dbContext;

        public Repository(BaseDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            
        }

        public virtual async Task<IReadOnlyList<T>> GetAllAsync()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        public virtual async Task<IReadOnlyList<T>> GetAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }

        public virtual async Task<int> CountAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).CountAsync();
        }

        private IQueryable<T> ApplySpecification(ISpecification<T> spec)
        {
            return SpecificationEvaluator<T>.GetQuery(_dbContext.Set<T>().AsQueryable(), spec);
        }

        public virtual async Task<IReadOnlyList<T>> GetAsync(Expression<Func<T, bool>> predicate)
        {
            return await _dbContext.Set<T>().Where(predicate).ToListAsync();
        }

        public virtual async Task<IReadOnlyList<T>> GetAsync(Expression<Func<T, bool>> predicate = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, string includeString = null, bool disableTracking = true)
        {
            IQueryable<T> query = _dbContext.Set<T>();
            if (disableTracking) query = query.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(includeString)) query = query.Include(includeString);

            if (predicate != null) query = query.Where(predicate);

            if (orderBy != null)
                return await orderBy(query).ToListAsync();
            return await query.ToListAsync();
        }

        public virtual async Task<IReadOnlyList<T>> GetAsync(Expression<Func<T, bool>> predicate = null, Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null, List<Expression<Func<T, object>>> includes = null, bool disableTracking = true)
        {
            IQueryable<T> query = _dbContext.Set<T>();
            if (disableTracking) query = query.AsNoTracking();

            if (includes != null) query = includes.Aggregate(query, (current, include) => current.Include(include));

            if (predicate != null) query = query.Where(predicate);

            if (orderBy != null)
                return await orderBy(query).ToListAsync();
            return await query.ToListAsync();
        }

        public virtual async Task<T> GetByIdAsync(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);
        }

        public virtual async Task<int> AddAsync(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            //TODO: _dbContext.SaveChangesAsync should be done in UoW(Unit Of Work) pattern 
            return await _dbContext.SaveChangesAsync();
        }

        public virtual Task Update(T entity)
        {
            _dbContext.Entry(entity).State = EntityState.Modified;
            return Task.FromResult(entity);
            //await _dbContext.SaveChangesAsync();
        }

        public virtual Task Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            return Task.FromResult(entity);
            //await _dbContext.SaveChangesAsync();
        }
    }
}
