using LaptopRental.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class ViewDetailsController : ApiController
    {
        public HttpResponseMessage GetDeviceById(int id)
        {
            LaptopRentalContext context = new LaptopRentalContext();
            var query = context.Devices.FirstOrDefault(s => s.DeviceId == id);
            if (query != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, query);
            }
            else
            {

                return Request.CreateResponse(HttpStatusCode.NotFound, "Searched Data not Found");
            }

        }


        public HttpResponseMessage GetUserById(int id)
        {
            LaptopRentalContext context = new LaptopRentalContext();
            var query = context.Users.FirstOrDefault(s => s.UserId == id);
            if (query != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, query);
            }
            else
            {

                return Request.CreateResponse(HttpStatusCode.NotFound, "Searched Data not Found");
            }

        }

        public HttpResponseMessage GetDeviceById(int id)
        {
            LaptopRentalContext context = new LaptopRentalContext();
            var query = context.Devices.FirstOrDefault(s => s.DeviceId == id);
            if (query != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, query);
            }
            else
            {

                return Request.CreateResponse(HttpStatusCode.NotFound, "Searched Data not Found");
            }

        }
    }
}
