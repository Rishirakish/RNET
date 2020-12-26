using System.Collections.Generic;
using System.Linq;

namespace TestingAndCalibrationLabs.Identity.Core.Common
{
    public class RequestResult<T>
    {
        public IList<ValidationMessage> ValidationMessages { get; set; }
        public T RequestedObject { get; set; }

        public bool IsSuccessful
        {
            get
            {
                bool successful = ValidationMessages.Any();

                if (successful && RequestedObject == null)
                {
                    successful = false;
                }

                return successful;
            }
            set { }
        }
    }
}
