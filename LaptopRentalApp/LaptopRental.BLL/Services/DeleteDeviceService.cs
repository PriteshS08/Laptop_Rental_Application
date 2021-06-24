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

    /// <summary>
    /// DeleteDeviceService to interact with User databse and perform Delete operation.
    /// </summary>
    public class DeleteDeviceService:IDisposable
    {
        private readonly LaptopRentalContext context;
        public DeleteDeviceService()
        {
            context = new LaptopRentalContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        /// <summary>
        /// Delete Devices Added by the user
        /// </summary>
        /// <param name="id"></param>
        /// <returns> object of the Delete Operation</returns>

        public Device DeleteDevicebyId(string imeiNumber)
        {
            try
            {
                var entity = (from device in context.Devices
                              where device.IMEINumber == imeiNumber
                              select device).SingleOrDefault();
                var deleted = context.Devices.Remove(entity);
                context.SaveChanges();
                return deleted ;
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
