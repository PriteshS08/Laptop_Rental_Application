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
    public class OverDueService : IDisposable
    {
        private readonly LaptopRentalContext context;
        public OverDueService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }

        public Request getDeviceDetails(int requestId)
        {
            var entity = (from req in context.Requests.Include(u => u.User).Include(d => d.Device)
                          where req.RequestId == requestId
                          select req).SingleOrDefault();
            return entity;
        }

        public Array getOverDueDevices()
        {
            try
            {

                var result = (from request in context.Requests
                              join device in context.Devices on request.DeviceId_FK equals device.DeviceId
                              where request.ToDate < DateTime.Now 
                              select new { request, device }).ToArray();
                foreach(var res in result)
                {
                    res.request.RequestStatus = "overdue";
                    res.device.Status = "overdue";
                    context.SaveChanges();
                }
                   
                return result;

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
