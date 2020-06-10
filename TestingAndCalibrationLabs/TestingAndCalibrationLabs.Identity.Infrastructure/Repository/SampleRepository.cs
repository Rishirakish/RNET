using TestingAndCalibrationLabs.Identity.Core.Entity;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Repository;
using TestingAndCalibrationLabs.Identity.Infrastructure.DBContext;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.Repository
{
    public class SampleRepository : Repository<SampleEntity>, ISampleRepository
    {
        private readonly SampleDbContext _sampleDbContext;

        public SampleRepository(SampleDbContext dbContext) : base(dbContext)
        {
            _sampleDbContext = dbContext;
        }

    }
}
