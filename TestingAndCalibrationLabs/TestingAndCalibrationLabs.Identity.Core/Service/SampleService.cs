using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.Core
{
    //TODO: Need to remove later
    public class SampleService : ISampleService
    {
        private readonly IUnitOfWork _unitOfWork;

        //TODO: all the service methods should only get the session context not even unitOfWork directly, I.e implement session Handler in API layer.
        public SampleService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public async Task<int> Insert(SampleEntity sampleEntity)
        {
             await _unitOfWork.GetRepository<SampleEntity>().Add(sampleEntity);
            return await _unitOfWork.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<SampleEntity>> Get()
        {
            return await _unitOfWork.GetRepository< SampleEntity>().GetAllAsync().ConfigureAwait(true);
        }
    }
}
