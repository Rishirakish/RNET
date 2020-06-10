using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Repository;
using TestingAndCalibrationLabs.Identity.Core.Interfaces.Service;
using TestingAndCalibrationLabs.Identity.Infrastructure.DBContext;
using TestingAndCalibrationLabs.Identity.Infrastructure.Repository;
using TestingAndCalibrationLabs.Identity.Infrastructure.Service;
using TestingAndCalibrationLabs.Identity.Infrastructure.UnitOfWork;
using TestingAndCalibrationLabs.Identity.SharedKernel.Base.UnitOfWork;

namespace TestingAndCalibrationLabs.Identity.RestApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // Used build it DI container
            // TODO: To evaluate autofac or structuremap DI container and do the necessary changes
            services.AddScoped<IUnitOfWork<SampleDbContext>, UnitOfWork<SampleDbContext>>();
            services.AddScoped<SampleDbContext, SampleDbContext>();
            services.AddScoped<ISampleRepository, SampleRepository>();
            services.AddScoped<ISampleService, SampleService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
