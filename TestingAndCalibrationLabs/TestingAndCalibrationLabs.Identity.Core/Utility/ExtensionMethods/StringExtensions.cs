using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace TestingAndCalibrationLabs.Identity.Core.Utility.ExtensionMethods
{
	/// <summary>
	/// Extension methods for <see cref="String"/> class.
	/// </summary>
	public static class StringExtensions
	{
		#region Private Members

		private static uint[] table;

		#endregion

		#region Constructor

		static StringExtensions()
		{
			uint poly = 0xedb88320;
			table = new uint[256];
            for (uint i = 0; i < table.Length; ++i)
			{
				var temp = i;
				for (int j = 8; j > 0; --j)
				{
					if ((temp & 1) == 1)
					{
						temp = (temp >> 1) ^ poly;
					}
					else
					{
						temp >>= 1;
					}
				}
				table[i] = temp;
			}
		}

		#endregion

		#region Public Methods
		/// <summary>
		/// Append a string to a string if the string does not have it.
		/// </summary>
		/// <param name="value"></param>
		/// <param name="trailingString"></param>
		/// <returns></returns>
		public static string EnforceTrailingString(this string value, string trailingString)
		{
			if (string.IsNullOrEmpty(value) || value.EndsWith(trailingString))
				return value;
			return value + trailingString;
		}

		/// <summary>
		/// Trims and Concats.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="maxLength">Maximum length of the Concatentated result.</param>
		/// <param name="suffix">The suffix.</param>
		/// <param name="includeSpace">if set to <c>true</c> [include space].</param>
		/// <returns></returns>
		public static String TrimConcat(this String value, int maxLength, String suffix, bool includeSpace)
		{
			if (string.IsNullOrEmpty(value))
			{
				return suffix;
			}

			string returnValue = value + (includeSpace ? " " : string.Empty) + suffix;
			return returnValue.Length > maxLength ? returnValue.Substring(0, maxLength) : returnValue;
		}

		/// <summary>
		/// Returns a new string in which all occurrences of a specified string in the current instance are replaced with another specified string.
		/// </summary>
		/// <param name="source">The source string.</param>
		/// <param name="oldValue">The string to be replaced.</param>
		/// <param name="newValue">The string to replace all occurrences of oldValue.</param>
		/// <param name="comparison">The type of string comparison to use.</param>
		/// <returns>
		/// A string that is equivalent to the current string except that all instances of oldValue are replaced with newValue.
		/// </returns>
		/// <exception cref="System.ArgumentNullException">oldValue is null.</exception>
		/// <exception cref="System.ArgumentException">oldValue is the empty string ("").</exception>
		public static string Replace(this string source, string oldValue, string newValue, StringComparison comparison)
		{
			if (oldValue == null) throw new ArgumentNullException("oldValue");
			if (oldValue == "") throw new ArgumentException("oldValue");

			int num5 = 0;
			int length = source.Length;
			int num2 = oldValue.Length;
			StringBuilder builder = new StringBuilder(length);
			while (num5 < length)
			{
				int num3 = source.IndexOf(oldValue, num5, comparison);
				if (num3 < 0)
				{
					builder.Append(source.Substring(num5));
					break;
				}
				builder.Append(source.Substring(num5, num3 - num5));
				builder.Append(newValue);
				num5 = num3 + num2;
			}
			source.Replace("sd", "sd");
			return builder.ToString();
		}

		/// <summary>
		/// Computes the checksum for a <paramref name="source"/>.
		/// </summary>
		/// <param name="source">The source.</param>
		/// <returns>A checksum for a <paramref name="source"/></returns>
		public static uint ComputeChecksum(this string source)
		{
			byte[] bytes = Encoding.ASCII.GetBytes(source);

			uint crc = 0xffffffff;
			for (int i = 0; i < bytes.Length; ++i)
			{
				byte index = (byte)(((crc) & 0xff) ^ bytes[i]);
				crc = (crc >> 8) ^ table[index];
			}
			return ~crc;
		}

		/// <summary>
		/// Determines whether a string contains another string segment, using a StringComparison.
		/// </summary>
		/// <param name="source">The source string.</param>
		/// <param name="segment">To string segment to compare.</param>
		/// <param name="comparison">The string comparison to use.</param>
		/// <returns>
		/// 	<c>true</c> if the source contains the string segment to compare; otherwise, <c>false</c>.
		/// </returns>
		public static bool Contains(this string source, string segment, StringComparison comparison)
		{
			return source.IndexOf(segment, comparison) >= 0;
		}
		/// <summary>
		/// Removes invalid filename characters from the string
		/// </summary>
		/// <param name="input">String from which, invalid character to be taken out</param>
		/// <returns>String without invalid filename characters</returns>
		public static string RemoveInvalidFileNameChars(this string input)
		{
			Regex r = new Regex(string.Format("[{0}]", Regex.Escape(new string(Path.GetInvalidFileNameChars()))));
			return r.Replace(input, "");
		}

		#endregion
	}
}
