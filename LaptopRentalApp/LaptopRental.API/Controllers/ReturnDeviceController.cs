using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class ReturnDeviceController : ApiController
    {
        public readonly ReturnDeviceService Service;
        private readonly LaptopRentalContext context;
        public ReturnDeviceController()
        {
            Service = new ReturnDeviceService();
            context = new LaptopRentalContext();
        }

        [HttpGet]
        [Route("api/ReturnDevice/ViewReturnDevice/{requestId}")]
        public HttpResponseMessage ViewReturnDevice([FromUri] int requestId)
        {
            var result = Service.Return(requestId);
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "RequestId not found");
            return Request.CreateResponse(HttpStatusCode.OK, result);

        }

        [HttpPut]
        [Route("api/ReturnDevice/ReturnedDevice/{requestId}")]
        public HttpResponseMessage ReturnedDevice([FromBody] int requestId)
        {
            try
            {

                var query = context.Requests.FirstOrDefault(s => s.RequestId == requestId);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                    query.RequestStatus = "Returned";
                    context.SaveChanges();
                    var a = context.Devices.FirstOrDefault(s => s.DeviceId == query.DeviceId_FK);
                    a.Status = "Available";
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");

                }


            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);

            }
        }
    }
}

