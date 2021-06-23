
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
namespace laptoprental.api.controllers
{
    public class viewdetailscontroller : ApiController
    {


        private readonly LaptopRentalContext context;
        public viewdetailscontroller()
        {
            context = new LaptopRentalContext();
        }
        public HttpResponseMessage getdevicebyid(int id)
        {
            
            var query = context.Devices.FirstOrDefault(s => s.DeviceId == id);
            if (query != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, query);
            }
            else
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "DeviceId not found");
            }

        }




    }
} 


