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
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<Return> Returns { get; set; }



        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Request>()
        //    .HasOptional(c => c.User)
        //    .WithMany()
        //     .WillCascadeOnDelete(false);


        //}
    }

  
}