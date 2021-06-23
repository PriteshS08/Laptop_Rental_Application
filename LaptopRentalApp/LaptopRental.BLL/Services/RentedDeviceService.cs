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
   public class RentedDeviceService
    {
        public readonly LaptopRentalContext context;
        public RentedDeviceService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }
        public List<Request> GetRentedDevices(int UserId)
        {
            try
            {
                List<Request> requests = context.Requests.ToList();
                List<Device> devices = context.Devices.ToList();

                var query = from req in requests
                            join dev in devices on req.DeviceId_FK equals dev.DeviceId
                            where req.UserId_FK == UserId && req.RequestStatus.ToLower() == "rented" && dev.Status.ToLower() == "rented"
                            select req;

                if (query != null)
                {
                    return query.ToList();

                }
                return new List<Request>();
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error fetching data", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while fetching data", ex);
            }
        }
       
    }
}
