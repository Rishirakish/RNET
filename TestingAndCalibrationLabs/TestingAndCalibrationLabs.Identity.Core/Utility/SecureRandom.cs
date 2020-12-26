using System;
using System.Security.Cryptography;

namespace TestingAndCalibrationLabs.Identity.Core.Utility
{
    public class SecureRandom : IDisposable
    {
        private readonly RandomNumberGenerator rng = new RNGCryptoServiceProvider();

        public int Next()
        {
            byte[] data = new byte[4];
            this.rng.GetBytes(data);
            return BitConverter.ToInt32(data, 0) & 2147483646;
        }

        public int Next(int maxValue)
        {
            return this.Next(0, maxValue);
        }

        public int Next(int minValue, int maxValue)
        {
            if (minValue > maxValue)
                throw new ArgumentOutOfRangeException();
            return (int)Math.Floor((double)minValue + ((double)maxValue - (double)minValue) * this.NextDouble());
        }

        public double NextDouble()
        {
            byte[] data = new byte[4];
            this.rng.GetBytes(data);
            return (double)BitConverter.ToUInt32(data, 0) / 4294967296.0;
        }

        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize((object)this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposing || this.rng == null)
                return;
            this.rng.Dispose();
        }
    }
}
