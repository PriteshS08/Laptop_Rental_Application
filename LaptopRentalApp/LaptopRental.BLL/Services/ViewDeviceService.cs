using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Services
{
    /// <summary>
    /// ViewDevicesService to interact with User databse and perform CRUD operation.
    /// </summary>
    public class ViewDevicesService : IDisposable
    {
        private readonly LaptopRentalContext context;
        public ViewDevicesService()
        {
            context = new LaptopRentalContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        /// <summary>
        /// Retrive all the devices added by the user
        /// </summary>
        /// <param name="emailId"></param>
        /// <param name="password"></param>
        /// <returns> Particular user's device from the database</returns>

        public List<Device> GetDeviceById(int id)
        {
            try
            {

                var entity = (from device in context.Devices
                              where device.UserId_FK == id
                              select device).ToList();
                return entity;

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