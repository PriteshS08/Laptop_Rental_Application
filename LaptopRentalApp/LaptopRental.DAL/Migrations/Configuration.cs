namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using LaptopRental.DAL.Models;

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
                DOB = Convert.ToDateTime("1998-04-03"),
                Age=23,
                Location = "Chennai",
                PhoneNO = "9933224455",
                IdProof = "image.jpg",
                Id_No = "123456789012",
                EmailId = "jojo@gmail.com",
                PassWord = "Jojo@123"
            };

            context.Users.AddOrUpdate(user => user.Name, user1);

            var Device1 = new Device()
            {
                IMEINumber = "LENO99883334",
                DeviceName = "Lenovo Rayzen 5 | 4GB RAM | 1TB Storage",
                DeviceSpecification = "AMD® Ryzen™ 5 4600H Processor (6 Cores / 12 Threads, 3.00 GHz, up to 4.00 GHz with Max Boost, " +
                                      "3 MB Cache L2 / 8 MB Cache L3)",
                PreInstalledSoftware = "1.Microsoft Office, Visual Studio 2017",
                Ratings = 4.2,
                DeviceImage = "Lenovo.jpg",
                RentalAmount = 1500,
                MaxRentalMonth = 2,
                Interest = 220.50,
                Status = "Available",
                UserId_FK=1

                
        };
            context.Devices.AddOrUpdate(Device => Device.DeviceName, Device1);



        }
    }
}
