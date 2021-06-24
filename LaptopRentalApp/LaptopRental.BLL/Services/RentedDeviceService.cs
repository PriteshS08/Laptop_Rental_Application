using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

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
                
                var query = (from req in context.Requests.Include(d => d.Device)
                             where req.UserId_FK == UserId && req.RequestStatus.ToLower()=="rented"
                             select req).ToList();
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
