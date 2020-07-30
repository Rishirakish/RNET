/* This is the base class for dbcontext.
 * We have to use inherit this class while creating dbcontext .
 * Also common configuration that is applicable to whole database table should go here.
 */

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;

namespace TestingAndCalibrationLabs.Identity.Infrastructure
{
    public abstract class BaseDbContext : IdentityDbContext<User, Role, string, UserClaim, UserRole, UserLogin,RoleClaim, UserToken>
    {
        protected BaseDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           // optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=RNET;Persist Security Info=True;User ID=sa;Password=Rsa@2bsafe;MultipleActiveResultSets=True");
        }
    }
}
