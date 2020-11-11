using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using TestingAndCalibrationLabs.Identity.Core;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Service;
using TestingAndCalibrationLabs.Identity.Infrastructure;
using TestingAndCalibrationLabs.Identity.RestApi.CustomHandlers;

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

            //Add sql
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("RNET")));

            // Db context
            services.AddScoped<BaseDbContext, ApplicationDbContext>();

            //Identity
            services.AddIdentity<User, Role>(options =>
                {
                    options.Tokens.AuthenticatorTokenProvider = "CustomTokenProvider";
                })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddTokenProvider<CustomTokenProvider<User>>("CustomTokenProvider");

            // Unit of work and repository setup
            services.AddScoped<IUnitOfWork<SampleEntity>, UnitOfWork<SampleEntity>>();

            //services
            services.AddScoped<ISampleService, SampleService>();
            services.AddScoped<IUserService, UserService>();

            // Mappers
            services.AddAutoMapper(typeof(MappingProfile));

            //
            services.AddAuthentication("Basic").
                AddScheme<BasicAuthenticationOptions, CustomAuthenticationHandler>("Basic",null);
            
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

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
