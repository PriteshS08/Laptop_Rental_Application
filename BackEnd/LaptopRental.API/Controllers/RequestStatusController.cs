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
        private readonly RequestStatusService Statusservice;
        public RequestStatusController()
        {
            Statusservice = new RequestStatusService();
        }

        protected override void Dispose(bool disposing)
        {
            Statusservice.Dispose();
            base.Dispose(disposing);
        }

        [HttpGet]
        [Route("api/RequestStatus/GetRequest/{UserId}")]
        public HttpResponseMessage GetRequest([FromUri] int UserId)
        {
            var request = Statusservice.RequestStatus(UserId);
            if (request == null || request.Count==0)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "RequestId not found");
            return Request.CreateResponse(HttpStatusCode.OK, request);
        }

    }
}
