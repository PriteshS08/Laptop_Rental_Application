namespace LaptopRental.DAL
{
    using LaptopRental.DAL.Models;
    using System;
    using System.Data.Entity;
    using System.Linq;


    /// <summary>
    /// Data context to work with LaptopRentalApp database.
    /// </summary>
    public class LaptopRentalContext : DbContext
    {
     
        public LaptopRentalContext()
            : base("name=LaptopRentalContext")
        {
        }

      

       public virtual DbSet<User> Users { get; set; }
       public virtual DbSet<Device> Devices { get; set; }
    }

  
}