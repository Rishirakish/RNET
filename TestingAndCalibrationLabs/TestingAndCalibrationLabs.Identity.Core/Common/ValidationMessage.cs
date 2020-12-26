using System.Collections.Generic;

namespace TestingAndCalibrationLabs.Identity.Core.Common
{
    public class ValidationMessage
    {

        public string Reason { get; private set; }


        public virtual ValidationSeverity Severity { get; private set; }


        public string MessageKey { get; set; }


        public string Description { get; private set; }


        public int Location { get; set; }


        public string ErrorValue { get; set; }


        public string Validator { get; private set; }

        public Dictionary<string, object> Data { get; private set; }


        public string XmlData { get; private set; }


        public string ResourcedMessage { get; set; }

        public ValidationMessage(
          string messageKey,
          string validator,
          string reason,
          ValidationSeverity severity,
          string description)
        {
            this.MessageKey = messageKey;
            this.Validator = validator;
            this.Reason = reason;
            this.Severity = severity;
            this.Description = description;
            this.Location = -1;
        }

        public ValidationMessage(
          string messageKey,
          string validator,
          string reason,
          ValidationSeverity severity,
          string description,
          int location,
          string erroredValue)
          : this(messageKey, validator, reason, severity, description)
        {
            this.Location = location;
            this.ErrorValue = erroredValue;
        }

        public ValidationMessage(
          string messageKey,
          string validator,
          string reason,
          ValidationSeverity severity,
          string description,
          int location,
          string erroredValue,
          Dictionary<string, object> data)
          : this(messageKey, validator, reason, severity, description)
        {
            this.Location = location;
            this.ErrorValue = erroredValue;
            this.Data = data;
        }

        public ValidationMessage(
          string messageKey,
          string validator,
          string reason,
          ValidationSeverity severity,
          string description,
          string xmlData)
          : this(messageKey, validator, reason, severity, description)
        {
            this.XmlData = xmlData;
        }

        public ValidationMessage(
          string messageKey,
          string validator,
          string reason,
          ValidationSeverity severity,
          string description,
          int location,
          string erroredValue,
          string xmlData)
          : this(messageKey, validator, reason, severity, description)
        {
            this.Location = location;
            this.ErrorValue = erroredValue;
            this.XmlData = xmlData;
        }

        public override bool Equals(object obj)
        {
            return obj is ValidationMessage validationMessage && (this.Description == validationMessage.Description && this.ErrorValue == validationMessage.ErrorValue && (this.Location == validationMessage.Location && this.Reason == validationMessage.Reason) && this.Severity == validationMessage.Severity && this.Validator == validationMessage.Validator);
        }

        public override int GetHashCode()
        {
            return ((((((this.Reason != null ? this.Reason.GetHashCode() : 0) * 397 ^ this.Severity.GetHashCode()) * 397 ^ (this.Description != null ? this.Description.GetHashCode() : 0)) * 397 ^ this.Location) * 397 ^ (this.ErrorValue != null ? this.ErrorValue.GetHashCode() : 0)) * 397 ^ (this.Validator != null ? this.Validator.GetHashCode() : 0)) * 397 ^ (this.Data != null ? this.Data.GetHashCode() : 0);
        }
    }
    public enum ValidationSeverity
    {
        None,
        Information,
        Warning,
        Error,
        Critical,
    }
}
