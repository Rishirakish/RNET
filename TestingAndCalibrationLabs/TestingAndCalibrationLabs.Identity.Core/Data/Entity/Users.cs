namespace TestingAndCalibrationLabs.Identity.Core
{
    public class Users : Entity
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public byte[] Password { get; set; }
        public string PhoneNumber { get; set; }
    }
}
