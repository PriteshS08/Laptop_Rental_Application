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

        public bool AddDevice(Device device)
        {
            try
            {
                var Obj = new Device();
                if (Obj.DeviceId == 0)
                {
                    Obj.IMEINumber = device.IMEINumber;
                    Obj.DeviceName = device.DeviceName;
                    Obj.DeviceSpecification = device.DeviceSpecification;
                    Obj.PreInstalledSoftware = device.PreInstalledSoftware;
                    Obj.Ratings = device.Ratings;
                    Obj.DeviceImage = device.DeviceImage;
                    Obj.RentalAmount = device.RentalAmount;
                    Obj.MaxRentalMonth = device.MaxRentalMonth;
                    Obj.Interest = device.Interest;
                    Obj.Status = device.Status;
                    Obj.UserId_FK = device.UserId_FK;

                    
                    int row = context.SaveChanges();
                    if (row == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (DbException ex)
            {
                
                throw new LaptopRentalException("Error in Writing", ex);
            }
            return false;
        }
        

        }
}
