using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Common;

namespace LaptopRental.BLL.Services
{

   
    public class ViewRequestService : IDisposable
    {
        private readonly LaptopRentalContext context;
        public ViewRequestService()
        {
            context = new LaptopRentalContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public Request GetSingleRequest(int requestid)
        {
            try
            {
                var query = (from request in context.Requests.Include(u => u.User).Include(d => d.Device)
                            where request.RequestId == requestid
                            select request).SingleOrDefault();
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

        public List<Request> GetAllRequest(int userId)
        {
            try
            {

                var query = context.Devices.FirstOrDefault(a => a.UserId_FK == userId);
                var b = query.DeviceId;
                var c = (from req in context.Requests
                         where (req.DeviceId_FK == b
                                && req.RequestStatus.ToLower().Equals("pending"))
                                || (req.DeviceId_FK == b
                                && req.RequestStatus.ToLower().Equals("return"))
                         select req).ToList();
                if (c != null)
                {
                    return c;
                }
                return new List<Request>();

            }
         



                //var query = (from request in context.Requests.Include(u => u.User).Include(d => d.Device)
                //             where (request.DeviceId_FK == deviceId
                //             && request.RequestStatus.ToLower().Equals("pending"))
                //             || (request.DeviceId_FK == deviceId
                //             && request.RequestStatus.ToLower().Equals("return"))
                //             select request).ToList();
                //return query;

            
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


