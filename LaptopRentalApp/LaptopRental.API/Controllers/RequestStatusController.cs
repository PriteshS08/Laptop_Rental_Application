using LaptopRental.BLL.Services;
using LaptopRental.DAL.Models;
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
        [Route("api/RequestStatus/GetRequest/{UserId}")]
        public IHttpActionResult GetRequest([FromUri] int UserId)
        {
            var request = service.RequestStatus(UserId);
            return Ok(request);
        }

    }
}
