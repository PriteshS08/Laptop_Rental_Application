namespace LaptopRental.DAL.Contexts
{
    using System;
    using System.Data.Entity;
    using System.Linq;
  
    public class LaptopRentalContext : DbContext
    {
       
        public LaptopRentalContext()
            : base("name=UserContext")
        {
        }

         public virtual DbSet<User> Users { get; set; }
    }

   
}