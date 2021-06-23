using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
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

        public Array getDeviceDetails(int deviceID)
        {
            var result = (from device in context.Devices 
                          join user in context.Users on device.UserId_FK equals user.UserId
                        where device.DeviceId == deviceID
                        select new { device, user}).ToArray();
            if (result != null)
            {
                return result;
            }
            return result = null;

        }

        public Array getOverDueDevices()
        {
            try
            {

                var result = (from request in context.Requests
                              join device in context.Devices on request.DeviceId_FK equals device.DeviceId
                              where request.ToDate < DateTime.Now
                              select new { request, device }).ToArray();
                return result;

            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Error reading data", ex);
            }

            catch (Exception ex)
            {
                throw new LaptopRentalException("UnKnown Error while reading data", ex);
            }

        }

    }
}
