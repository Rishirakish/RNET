using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.FrontOffice.Core
{
    public class SampleService : ISampleService
    {
        private readonly IUnitOfWork<SampleEntity> _unitOfWork;

        //TODO: all the service methods should only get the session context not even unitOfWork directly, I.e implement session Handler in API layer.
        public SampleService(IUnitOfWork<SampleEntity> unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<int> Insert(SampleEntity sampleEntity)
        {
             await _unitOfWork.Repository.Add(sampleEntity);
            return await _unitOfWork.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<SampleEntity>> Get()
        {
            return await _unitOfWork.Repository.GetAllAsync().ConfigureAwait(true);
        }
    }
}
