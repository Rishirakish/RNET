using System;

namespace TestingAndCalibrationLabs.Identity.Core.Utility
{
	/// <summary>
	/// Summary description for SessionTokenMesh.
	/// </summary>
	public class SessionTokenMesh
	{
		#region Constructors

		/// <summary>
		/// This private constructor is necessary to prevent the compiler from adding a default
		/// public constructor on a static holder type.  This also prevents CA1053 from showing.
		/// This class cannot be made static because it contains a protected member (which implies
		/// inheritance)
		/// </summary>
		protected SessionTokenMesh()
		{
		}

		#endregion

		#region Public Methods

		/// <summary>
		/// Merges a base session token with a numeric value.
		/// </summary>
		/// <param name="sessionToken">the base session token to merge</param>
		/// <param name="numericValue">the numeric value to merge</param>
		/// <returns>
		/// Returns a string representing the sessionToken combined with numericValue.
		/// </returns>
		/// <remarks>
		/// Cascading salt is added to provide a more cryptographically strong mesh.
		/// The rolling salt must be implemented to provide a reversible pseudorandom
		/// seed to provide a more plausible numeric distribution in the resulting hash
		/// (without this the hash will typically contain a detectable pattern in the
		/// target bits).
		/// </remarks>
		public static string Mesh(string sessionToken, uint numericValue)
		{
			byte[] hashBytes = ParseToken(sessionToken);
			byte byteMask = 0x03;
			byte cascadingSalt = (byte)(hashBytes[15] & ~byteMask);

			for (int i = 0; i < 16; i++)
			{
				hashBytes[i] &= (byte)~byteMask;
				cascadingSalt >>= 1;
				cascadingSalt ^= hashBytes[i];
				hashBytes[i] |= (byte)(((numericValue >> (i << 1)) ^ cascadingSalt) & byteMask);
			}

			string meshedStr = BitConverter.ToString(hashBytes);
			return meshedStr.Replace("-", "");
		}

		/// <summary>
		/// Extracts the numeric value meshed into a session token.
		/// </summary>
		/// <param name="sessionToken">the session token returned from a Mesh() call</param>
		/// <returns>
		/// Returns the numeric value meshed into sessionToken.
		/// </returns>
		public static uint Extract(string sessionToken)
		{
			byte[] hashBytes = ParseToken(sessionToken);
			const byte byteMask = 0x03;
			byte cascadingSalt = (byte)(hashBytes[15] & ~byteMask);
			uint retVal = 0;

			for (int i = 0; i < 16; i++)
			{
				cascadingSalt >>= 1;
				cascadingSalt ^= (byte)(hashBytes[i] & ~byteMask);
				retVal |= ((uint)((hashBytes[i] ^ cascadingSalt) & byteMask) << (i << 1));
			}

			return retVal;
		}

		/// <summary>
		/// Indicates whether a session token is composed of valid characters.
		/// </summary>
		/// <param name="sessionToken">the session token to check</param>
		/// <returns>
		/// Returns true if the session token has the proper length and
		/// only contains hex digits; otherwise, false.
		/// </returns>
		public static bool IsValidSessionToken(string sessionToken)
		{
			if (sessionToken == null || sessionToken.Length != 32)
			{
				return false;
			}

			foreach (char ch in sessionToken)
			{
				if (!Uri.IsHexDigit(ch))
				{
					return false;
				}
			}

			return true;
		}

		#endregion

		#region Protected Methods

		/// <summary>
		/// Converts a session token string into a byte array.
		/// </summary>
		/// <param name="sessionToken">the session token string</param>
		/// <returns>
		/// Returns the session token string converted to a byte array.
		/// If an error occurs, an InvalidSessionTokenException is thrown.
		/// </returns>
		protected static byte[] ParseToken(string sessionToken)
		{
			try
			{
				Guid hash = new Guid(sessionToken);
				byte[] buffer = hash.ToByteArray();

				Array.Reverse(buffer, 0, 4);
				Array.Reverse(buffer, 4, 2);
				Array.Reverse(buffer, 6, 2);

				return buffer;
			}
			catch (Exception)
			{
				throw new Exception("Unable to parse session token.");
			}
		}

		#endregion
	}
}
