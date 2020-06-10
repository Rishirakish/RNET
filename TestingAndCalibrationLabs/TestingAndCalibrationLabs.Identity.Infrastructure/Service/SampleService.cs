using System.Collections.Generic;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Entity;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Repository;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Service;
using TestingAndCalibrationLabs.Identity.Infrastructure.DBContext;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.UnitOfWork;

namespace TestingAndCalibrationLabs.Identity.Infrastructure.Service
{
    public class SampleService : ISampleService
    {
        private readonly IUnitOfWork<SampleDbContext> _unitOfWork;
        private readonly ISampleRepository _sampleRepository;

        public SampleService(IUnitOfWork<SampleDbContext> unitOfWork, ISampleRepository sampleRepository)
        {
            _unitOfWork = unitOfWork;
            _sampleRepository = sampleRepository;
        }
        public async Task<int> Insert(SampleEntity sampleEntity)
        {
            int result = 0;
            //TODO: Need custom implementation of UoW pattern instead of standard example. Suggestion to use factory pattern
            /*using (_unitOfWork)
            {*/
                result = await _sampleRepository.AddAsync(sampleEntity).ConfigureAwait(true);
                /*Task.Run(async () =>
                {
                    result = await _unitOfWork.CommitAsync();
                });*/
            //}

            return result;
        }

        public async Task<IReadOnlyList<SampleEntity>> Get()
        {
            return await _sampleRepository.GetAllAsync().ConfigureAwait(true);
        }
    }
}
