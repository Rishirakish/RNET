using System.Collections.Generic;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Entity;

namespace TestingAndCalibrationLabs.Identity.Core.Interfaces.Service
{
    public interface ISampleService
    {
        Task<int> Insert(SampleEntity sampleEntity);
        Task<IReadOnlyList<SampleEntity>> Get();
    }
}
