using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestingAndCalibrationLabs.Identity.Core
{
    public interface ISampleService
    {
        Task<int> Insert(SampleEntity sampleEntity);
        Task<IReadOnlyList<SampleEntity>> Get();
    }
}
