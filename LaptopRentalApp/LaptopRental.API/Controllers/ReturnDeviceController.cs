using LaptopRental.BLL.Services;
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
        public ReturnDeviceController()
        {
            Service = new ReturnDeviceService();
        }

        [HttpGet]
        [Route("api/ReturnDevice/ReturnDevice/{requestId}")]
        public HttpResponseMessage ReturnDevice([FromUri] int requestId)
        {
            var result = Service.Return(requestId);
            if (result != null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "RequestId not found");
            return Request.CreateResponse(HttpStatusCode.OK, result);

        }
    }
}           

        //[HttpPut]
        //[Route("api/AcceptReject/Accept")]
        //public HttpResponseMessage Accept([FromBody] int deviceId)
        //{
        //    try
        //    {

        //        var query = context.Requests.FirstOrDefault(s => s.DeviceId_FK == deviceId);
        //        if (query == null)
        //        {
        //            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
        //        }
        //        else
        //        {
        //            query.RequestStatus = "Rented";
        //            context.SaveChanges();
        //            var a = context.Devices.FirstOrDefault(s => s.DeviceId == query.DeviceId_FK);
        //            a.Status = "Rented";
        //            context.SaveChanges();
        //            return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");

        //        }


        //    }
        //    catch (Exception ex)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
        //    }

        //}
    
