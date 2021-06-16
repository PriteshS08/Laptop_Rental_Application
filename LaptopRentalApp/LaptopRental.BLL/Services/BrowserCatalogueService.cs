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
    public class BrowserCatalogueService
    {
        private readonly LaptopRentalContext context;

        public BrowserCatalogueService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }
        public List<Device> GetAllDevices()
        {
            try
            {
                var query = (from device in context.Devices
                             where device.Status.ToLower() == "available"
                            select device).ToList();
                return query;
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
