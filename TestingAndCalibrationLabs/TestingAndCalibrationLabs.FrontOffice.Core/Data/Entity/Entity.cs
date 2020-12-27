namespace TestingAndCalibrationLabs.FrontOffice.Core
{
    /// <summary>
    /// This is the base class for all the entity we create.
    /// All entity class which construct the database should inherit this class
    /// Here we are assuming all ID column of all table will be of type int
    /// </summary>
    public abstract class Entity : EntityBase<int>
    {
    }
}
