using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class RequestStatusController : ApiController
    {
        private readonly RequestStatusService service;
        public RequestStatusController()
        {
            service = new RequestStatusService();
        }

        [HttpGet]
        public IHttpActionResult GetRequest()
        {
            var request = service.GetAllRequest();
            return Ok(request);
        }

    }
}
