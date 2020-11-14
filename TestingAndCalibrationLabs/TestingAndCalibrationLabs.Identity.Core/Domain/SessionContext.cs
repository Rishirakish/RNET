namespace TestingAndCalibrationLabs.Identity.Core.Domain
{
    public class SessionContext : IDeepCloneable
    {
        public string SessionToken { get; set; }

        public string UserID { get; set; }

        public object DeepClone()
        {
            SessionContext sessionContext = MemberwiseClone() as SessionContext;
            return sessionContext;
        }
    }
}
