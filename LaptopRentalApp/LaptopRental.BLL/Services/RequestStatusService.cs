using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace LaptopRental.BLL.Services
{
    public class RequestStatusService
    {
        private readonly LaptopRentalContext context;

        public RequestStatusService()
        {
            context = new LaptopRentalContext();
        }

        public List<Request> RequestStatus(int UserId)
        {
            var query = (from req in context.Requests.Include(d=>d.Device)
                        where req.UserId_FK==UserId
                        select req).ToList();
            if (query != null)
            {
                return query;
            }
            return  new List<Request>();
        }
    }
}
