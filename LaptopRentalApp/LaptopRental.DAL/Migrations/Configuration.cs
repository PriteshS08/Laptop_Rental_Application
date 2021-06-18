namespace LaptopRental.DAL.Migrations
{
    using LaptopRental.DAL.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<LaptopRental.DAL.LaptopRentalContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(LaptopRental.DAL.LaptopRentalContext context)
        {
            var user1 = new User()
            {
                Name = "Jojo",
                Gender = "Male",
                Age = 23,
                Location = "Chennai",
                PhoneNO = "9933224455",
                IdProof = "image.jpg",
                Id_No = "123456789012",
                EmailId = "jojo@gmail.com",
                PassWord = "Jojo@123"
            };
            context.Users.AddOrUpdate(user => user.Name, user1);

          

        }
    }
}
