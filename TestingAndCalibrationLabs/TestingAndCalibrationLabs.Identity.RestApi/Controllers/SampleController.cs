using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core.Entity;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Service;
using TestingAndCalibrationLabs.Identity.RestApi.DTO;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        private readonly ISampleService _sampleService;
        public SampleController(ISampleService sampleService)
        {
            _sampleService = sampleService;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Save(SampleEntity sampleEntity)
        {
            return await _sampleService.Insert(sampleEntity).ConfigureAwait(true);
        }

        [HttpGet]
        public async Task<ActionResult<IList<SampleResponse>>> Get()
        {
            //TODO: Implement DI for automapper and generic framework for automapper to ease the use of it.
            IReadOnlyList<SampleEntity> temp = await _sampleService.Get().ConfigureAwait(true);
            var temp1 = temp.ToList();
            var configuration = new MapperConfiguration(cfg => cfg.CreateMap(typeof(SampleEntity),typeof(SampleResponse)));
            var mapper = configuration.CreateMapper();
            var result = mapper.Map<IList<SampleEntity>, IList<SampleResponse>>(temp1);
            return Ok(result);

        }
    }
}
