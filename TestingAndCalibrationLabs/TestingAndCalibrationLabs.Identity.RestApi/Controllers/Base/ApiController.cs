using Microsoft.AspNetCore.Mvc;
using TestingAndCalibrationLabs.Identity.Core.Domain;

namespace TestingAndCalibrationLabs.Identity.RestApi.Controllers.Base
{
    public abstract class ApiController : ControllerBase
    {
        #region Public Properties
        public SessionContext SessionContext => ControllerContext.HttpContext.Items[ApiConstants.SESSION_ID_TOKEN] as SessionContext;

        #endregion Public Properties
    }
}
