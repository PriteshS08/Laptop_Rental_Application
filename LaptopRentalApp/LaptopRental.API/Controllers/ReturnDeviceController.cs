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
            if(result!=null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "RequestId not found");
            return Request.CreateResponse(HttpStatusCode.OK, result);

        }
    }
}
