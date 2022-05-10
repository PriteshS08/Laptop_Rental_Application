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
    public class AddDeviceService
    {
        public readonly LaptopRentalContext context;

        public AddDeviceService()
        {
            context = new LaptopRentalContext();

        }
        public void Dispose()
        {
            context.Dispose();
        }


        public bool Add(Device device)
        {
            try
            {
                context.Devices.Add(device);
                return context.SaveChanges() == 1;
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error adding the menu item", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while adding menu items", ex);
            }
        }
    }
}
