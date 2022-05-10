using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Common;
using System.Data.Entity;

namespace LaptopRental.BLL.Services
{
    public class ReturnDeviceService : IDisposable
    {
        public readonly LaptopRentalContext context;

        public ReturnDeviceService()
        {
            context = new LaptopRentalContext();

        }
        public void Dispose()
        {
            context.Dispose();
        }

        public Request Return(int requestid)
        {
            try
            {
                var query = (from request in context.Requests.Include(u=>u.User).Include(d=>d.Device)
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
    }
}
