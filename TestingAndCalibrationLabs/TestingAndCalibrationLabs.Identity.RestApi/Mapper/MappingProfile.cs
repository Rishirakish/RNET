using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TestingAndCalibrationLabs.Identity.Core;

namespace TestingAndCalibrationLabs.Identity.RestApi
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<SampleEntity, SampleResponse>();
        }
    }
}
