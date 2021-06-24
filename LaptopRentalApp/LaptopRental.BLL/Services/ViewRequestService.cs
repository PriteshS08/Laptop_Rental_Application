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

   
    public class ViewRequestService
    {
        private readonly LaptopRentalContext context;
        public ViewRequestService()
        {
            context = new LaptopRentalContext();
        }


        public List<Request> GetSingleRequest(int requestid)
        {
            var query = (from request in context.Requests
                         where request.RequestId == requestid
                         select request).ToList();
            if (query != null)
            {
                return query;
            }
            return new List<Request>();

        }

        public List<Request> GetAllRequest()
        {
            List<Request> req = context.Requests.ToList();
            List<Device> dev = context.Devices.ToList();

            var query = from request in req
                        join device in dev on request.DeviceId_FK equals device.DeviceId
                        select request;
            if(query!=null)
            {
                return query.ToList();
            }
            return new List<Request>();
        }
    }
}


