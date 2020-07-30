using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.FrontOffice.Core;
using TestingAndCalibrationLabs.FrontOffice.RestApi;

namespace TestingAndCalibrationLabs.Identity.RestApi
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        private readonly ISampleService _sampleService;
        private readonly IMapper _mapper;
        public SampleController(ISampleService sampleService, IMapper mapper)
        {
            _sampleService = sampleService;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Save(SampleEntity sampleEntity)
        {
            return await _sampleService.Insert(sampleEntity).ConfigureAwait(true);
        }

        [HttpGet]
        public async Task<ActionResult<IList<SampleResponse>>> Get()
        {
            IReadOnlyList<SampleEntity> temp = await _sampleService.Get().ConfigureAwait(true);
            var temp1 = temp.ToList();
            var result = _mapper.Map<IList<SampleEntity>, IList<SampleResponse>>(temp1);
            return Ok(result);
        }
    }
}
