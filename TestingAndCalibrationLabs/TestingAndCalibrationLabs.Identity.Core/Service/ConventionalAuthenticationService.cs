using System.Linq;
using System.Threading.Tasks;
using TestingAndCalibrationLabs.Identity.Core.Common;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity;
using TestingAndCalibrationLabs.Identity.Core.Helper;
using TestingAndCalibrationLabs.Identity.Core.Utility;

namespace TestingAndCalibrationLabs.Identity.Core.Service
{
    public class ConventionalAuthenticationService : IConventionalAuthenticationService
    {
        private readonly IUnitOfWork _unitOfWork;
        public ConventionalAuthenticationService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<int> Add(string username, string password)
        {
            Users user = new Users {UserName = username, Password = HashProvider.ComputePbkdf2Hash(password)};
            var userRepo = _unitOfWork.GetRepository<Users>();
            await userRepo.Add(user);
            return await _unitOfWork.SaveChangesAsync();
        }

        public async Task<string> Login(string username, string password)
        {
            var user = _unitOfWork.GetRepository<Users>().GetAsync(u => u.UserName == username).Result.FirstOrDefault();
            if (user != null && PasswordValidationHelper.ValidateUserPassword(user, password))
            {
                string sessionToken = SessionTokenHelper.CreateSessionToken(user.UserName);
                var sessionRepo = _unitOfWork.GetRepository<Session>();
                await sessionRepo.Add(new Session {UserId = user.Id, SessionToken = sessionToken});
                await _unitOfWork.SaveChangesAsync();
                return sessionToken;
            }
            return null;
        }

        public async Task<RequestResult<SessionContext>> ValidateSessionToken(string sessionToken)
        {
            return new RequestResult<SessionContext>();
        }

    }
}
