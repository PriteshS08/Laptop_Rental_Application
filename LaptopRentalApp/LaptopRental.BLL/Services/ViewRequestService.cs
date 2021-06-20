using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Services
{

   
    public class ViewRequestService
    {
        private readonly LaptopRentalContext context;
        public ViewRequestService()
        {
            context = new LaptopRentalContext();
        }

        public bool GetRequest()
        {
            List<Request> req = context.Requests.ToList();
            List<Device> dev = context.Devices.ToList();

            var query=from request in req 
                      join device in  dev on request.DeviceId_FK equals device.DeviceId

        }
    }
}
