/* This is the base class for dbcontext.
 * We have to use inherit this class while creating dbcontext .
 * Also common configuration that is applicable to whole database table should go here.
 */

using System.Data.Entity;

namespace TestingAndCalibrationLabs.Identity.SharedKernel.Base.DBContext
{
    public abstract class BaseDbContext : DbContext
    {
        protected BaseDbContext(string connectionString) : base(connectionString)
        {
            
        }
    }
}
