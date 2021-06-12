namespace LaptopRental.DAL
{
    using LaptopRental.DAL.Models;
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class LaptopRentalContext : DbContext
    {
     
        public LaptopRentalContext()
            : base("name=LaptopRentalContext")
        {
        }

      

       public DbSet<User> Users { get; set; }
    }

  
}