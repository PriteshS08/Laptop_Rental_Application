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
    public class RequestStatusService
    {
        private readonly LaptopRentalContext context;

        public RequestStatusService()
        {
            context = new LaptopRentalContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }


        public List<Request> RequestStatus(int UserId)
        {
            try
            {
                var query = (from req in context.Requests.Include(d => d.Device).Include(u=>u.User)
                             where req.UserId_FK == UserId
                             select req).ToList();
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
