using System;
using NUnit.Framework;
using LaptopRental.BLL.Services;
using LaptopRental.BLL;
using System.Collections;

namespace LaptopRental.BLL.Test
{
    [TestFixture]
    class GetAvailableDevices_NunitTest
    {
        private BrowserCatalogueService _BCS;
        private FetchingCountOfAvailableDevice _FADC;

        [SetUp]
        public void setup()
        {
            _BCS = new BrowserCatalogueService();
            _FADC = new FetchingCountOfAvailableDevice();
        }
        
        [Test]
        public void GetAvailableDevices_Test()
        {
            //Arrange 
            //var BCS = new BrowserCatalogueService();
           

            //Act
            var AvailableDevice = _BCS.GetAvailableDevices();

            //Assert
            Assert.That(AvailableDevice.Count, Is.EqualTo(8));
        }


        [Test]
        public void FetchingAvailableDevicesCount_Test()
        {
            //Arrange 
            //var FADC = new FetchingCountOfAvailableDevice();
               

            //Act
            var count = _FADC.AvailableDevice();

            //Assert
            Assert.That(count, Is.EqualTo(8));
        }

        [Test]
        public void GetAvailableDevices_TestingBy_FetchingAvailableDevicesCount()
        {
            var AvailableDevice = _BCS.GetAvailableDevices();
            var count = _FADC.AvailableDevice();

            //Assert.AreEqual(AvailableDevice.Count,count);

            CollectionAssert.AreEqual(AvailableDevice, AvailableDevice);
        }




    }
}
