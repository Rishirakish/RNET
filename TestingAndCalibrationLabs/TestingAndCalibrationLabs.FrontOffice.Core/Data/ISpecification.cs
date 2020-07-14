using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace TestingAndCalibrationLabs.FrontOffice.Core
{
    /// <summary>
    /// This helps to implement paging and querying the database.
    /// Part of CQRS pattern
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Criteria { get; }
        List<Expression<Func<T, object>>> Includes { get; }
        List<string> IncludeStrings { get; }
        Expression<Func<T, object>> OrderBy { get; }
        Expression<Func<T, object>> OrderByDescending { get; }

        int Take { get; }
        int Skip { get; }
        bool isPagingEnabled { get; }
    }
}
