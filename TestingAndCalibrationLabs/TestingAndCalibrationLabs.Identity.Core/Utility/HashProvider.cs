using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace TestingAndCalibrationLabs.Identity.Core.Utility
{
    public static class HashProvider
    {
        [ThreadStatic]
        private static HashAlgorithm m_hashAlgorithm;
        [ThreadStatic]
        private static HashAlgorithm m_hashAlgorithmMD5;

        private static HashAlgorithm SHA256Hash
        {
            get
            {
                if (HashProvider.m_hashAlgorithm == null)
                    HashProvider.m_hashAlgorithm = new SHA256CryptoServiceProvider();
                return HashProvider.m_hashAlgorithm;
            }
        }

        private static HashAlgorithm MD5Hash
        {
            get
            {
                if (HashProvider.m_hashAlgorithmMD5 == null)
                    HashProvider.m_hashAlgorithmMD5 = new MD5CryptoServiceProvider();
                return HashProvider.m_hashAlgorithmMD5;
            }
        }

        public static byte[] ComputeSHA256Hash(string plainText, byte[] saltBytes)
        {
            if (saltBytes == null)
                saltBytes = HashProvider.CreateSalt(4, 8);
            byte[] bytes = Encoding.Default.GetBytes(plainText);
            byte[] buffer = new byte[bytes.Length + saltBytes.Length];
            Array.Copy(bytes, buffer, bytes.Length);
            Array.Copy(saltBytes, 0, buffer, bytes.Length, saltBytes.Length);
            byte[] hash = HashProvider.SHA256Hash.ComputeHash(buffer);
            byte[] numArray = new byte[hash.Length + saltBytes.Length];
            Array.Copy(hash, numArray, hash.Length);
            Array.Copy(saltBytes, 0, numArray, hash.Length, saltBytes.Length);
            return numArray;
        }

        public static byte[] ComputePbkdf2Hash(string plainText, byte[] saltBytes)
        {
            if (saltBytes == null)
                saltBytes = HashProvider.CreateSalt(8, 32);
            return KeyDerivation.Pbkdf2(plainText, saltBytes, KeyDerivationPrf.HMACSHA256, 100000, 32).Concat(saltBytes).ToArray();
        }

        public static byte[] ComputeSHA256Hash(string plainText)
        {
            return HashProvider.ComputeSHA256Hash(plainText, null);
        }

        public static byte[] ComputePbkdf2Hash(string plainText)
        {
            return HashProvider.ComputePbkdf2Hash(plainText, null);
        }

        public static string CreateSHA256Hash(string input)
        {
            return HashProvider.CreateSHA256Hash(Encoding.UTF8.GetBytes(input.ToLower()));
        }

        public static string CreateSHA256Hash(byte[] input)
        {
            return Convert.ToBase64String(HashProvider.SHA256Hash.ComputeHash(input));
        }

        public static byte[] CreateSHA256HashForGuid(string input)
        {
            return HashProvider.Create16BytesFrom32Bytes(HashProvider.SHA256Hash.ComputeHash(Encoding.UTF8.GetBytes(input.ToLower())));
        }

        public static byte[] CreateMD5Hash(string input)
        {
            return HashProvider.MD5Hash.ComputeHash(Encoding.UTF8.GetBytes(input.ToLower()));
        }

        public static byte[] GetSaltFromHash(byte[] hashWithSaltBytes)
        {
            return HashProvider.ExtractSaltFromHash(hashWithSaltBytes, 32);
        }

        public static bool VerifyHash(string plainText, byte[] hashBytes)
        {
            byte[] rhsHashBytes;
            try
            {
                byte[] saltFromHash = HashProvider.GetSaltFromHash(hashBytes);
                rhsHashBytes = HashProvider.ComputePbkdf2Hash(plainText, saltFromHash);
            }
            catch (Exception)
            {
                rhsHashBytes = new byte[0];
            }
            return HashProvider.CompareHashes(rhsHashBytes, hashBytes);
        }

        public static bool CompareHashes(byte[] rhsHashBytes, byte[] lhsHashBytes)
        {
            bool flag = true;
            if (rhsHashBytes.Length == lhsHashBytes.Length)
            {
                for (int index = 0; index < rhsHashBytes.Length & flag; ++index)
                {
                    if (rhsHashBytes[index] != lhsHashBytes[index])
                        flag = false;
                }
            }
            else
                flag = false;
            return flag;
        }

        private static byte[] CreateSalt(int min, int max)
        {
            byte[] data = new byte[new SecureRandom().Next(min, max)];
            new RNGCryptoServiceProvider().GetNonZeroBytes(data);
            return data;
        }

        private static byte[] ExtractSaltFromHash(byte[] hashWithSaltBytes, int hashSize)
        {
            if (hashWithSaltBytes.Length < hashSize)
                throw new Exception("Hash string is invalid - smaller than hash size");
            byte[] numArray = new byte[hashWithSaltBytes.Length - hashSize];
            for (int index = 0; index < numArray.Length; ++index)
                numArray[index] = hashWithSaltBytes[hashSize + index];
            return numArray;
        }

        private static byte[] Create16BytesFrom32Bytes(byte[] hash32)
        {
            byte[] numArray = new byte[16];
            bool flag = true;
            int num1 = 0;
            foreach (byte num2 in hash32)
            {
                if (flag)
                {
                    flag = false;
                    numArray[num1++] = num2;
                }
                else
                    flag = true;
            }
            return numArray;
        }
    }
}
