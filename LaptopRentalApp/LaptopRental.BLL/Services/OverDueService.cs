using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Services
{
    public class OverDueService : IDisposable
    {
        private readonly LaptopRentalContext context;
        public OverDueService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }

        public Device getDeviceDetails(int deviceID)
        {
            var result = (from device in context.Devices
                        where device.DeviceId == deviceID
                        select device).SingleOrDefault();
            if (result != null)
            {
                return result;
            }
            return result = null;

        }
    }
}
