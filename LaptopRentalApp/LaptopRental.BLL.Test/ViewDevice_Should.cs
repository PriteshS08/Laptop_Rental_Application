using LaptopRental.BLL.Services;
using LaptopRental.DAL.Models;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Test
{
    [TestFixture]
    public class ViewDeviceService_Should
    {
        private ViewDevicesService service;
        [OneTimeSetUp]
        public void Init()
        {
            service = new ViewDevicesService();
        }
        [OneTimeTearDown]
        public void cleanup()
        {
            service.Dispose();
        }

        /// <summary>
        /// unit Test for GetByUserId.
        /// </summary>
        /// <param name="model"></param>

        [Test]
        public void Return_Devices_ForUserId(Device devices)
        {
            var result = service.GetDeviceById(devices.UserId_FK);
            Assert.IsNotEmpty(result.ToString());
        }
    }
}

