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
    public class MakeRequestService
    {
        private readonly LaptopRentalContext context;
        public MakeRequestService()
        {
            context = new LaptopRentalContext();
        }
        public Request AddRequest(Request obj)
        {

            try
            {
               var Added = context.Requests.Add(obj);
                var rows=context.SaveChanges();
                if(rows==1)
                {
                    return Added;
                }
               else
                {
                    return new Request();
                }

              
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error adding ", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while adding ", ex);
            }

        }

        public bool Update(int deviceid)
        {
            try
            {
                var query = context.Requests.FirstOrDefault(s => s.DeviceId_FK == deviceid);
                var obj = context.Devices.FirstOrDefault(s => s.DeviceId == deviceid);
                if (query != null)
                {
                    query.RequestStatus ="Accepted";
                    obj.Status = "Not Active";
                    var rows = context.SaveChanges();
                    if (rows == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                return false;

            }

            catch (DbException ex)
            {
                return true;
                throw new LaptopRentalException("Error in updating", ex);
            }
        }

        public bool Delete(int deviceid)
        {
            try
            {
                var query = context.Requests.FirstOrDefault(s => s.DeviceId_FK == deviceid);
               
                if (query != null)
                {
                  
                  
                    var rows = context.SaveChanges();
                    if (rows == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }

                return false;

            }

            catch (DbException ex)
            {
                return true;
                throw new LaptopRentalException("Error in updating", ex);
            }
        }
    }
}
