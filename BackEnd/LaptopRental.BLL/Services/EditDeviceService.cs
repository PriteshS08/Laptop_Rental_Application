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
        public bool EditDevice(Device obj)
        {
            try
            {
               var rows= context.SaveChanges();
                if(rows==1)
                {
                    return true;
                }
                return false;

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

        public Device RetrieveDevice(int deviceId)
        {
            try
            {
                var query = (from dev in context.Devices
                            where dev.DeviceId == deviceId
                            select dev).SingleOrDefault();
                return query;
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
