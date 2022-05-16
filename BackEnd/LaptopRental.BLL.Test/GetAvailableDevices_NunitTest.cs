using System;
using NUnit.Framework;
using LaptopRental.BLL.Services;

namespace LaptopRental.BLL.Test
{
    [TestFixture]
    class GetAvailableDevices_NunitTest
    {
        [Test]
        public void GetAvailableDevices_Test()
        {
            //Arrange 
            var BCS = new BrowserCatalogueService();
           

            //Act
            var AvailableDevice = BCS.GetAvailableDevices();

            //Assert
            Assert.That(AvailableDevice.Count, Is.EqualTo(8));
        }
    }
}
