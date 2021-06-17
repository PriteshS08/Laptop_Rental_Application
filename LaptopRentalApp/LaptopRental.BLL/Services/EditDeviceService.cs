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
   public class EditDeviceService
    {

        public readonly LaptopRentalContext context;

        public EditDeviceService()
        {
            context = new LaptopRentalContext();

        }
        public bool Add(Device obj)
        {
            try
            {
                context.Devices.Add(obj);
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
