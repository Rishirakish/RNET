using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RNetworks.Startup))]
namespace RNetworks
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
