using System;
using System.Collections.Generic;
using System.Text;
using TestingAndCalibrationLabs.Identity.Core.Data.Entity.Identity;
using TestingAndCalibrationLabs.Identity.Core.Utility;

namespace TestingAndCalibrationLabs.Identity.Core.Helper
{
    class PasswordValidationHelper
    {
        public static bool ValidateUserPassword(Users user, string password)
        {
            return user != null && ValidateUsingPbkdf2(user, password);
        }
        private static bool ValidateUsingPbkdf2(Users user, string password)
        {
            byte[] saltBytes = HashProvider.GetSaltFromHash(user.Password);
            byte[] pbkdf2HashedPassword = HashProvider.ComputePbkdf2Hash(password, saltBytes);

            if (HashProvider.CompareHashes(user.Password, pbkdf2HashedPassword))
            {
                return true;
            }

            return false;
        }
    }
}
