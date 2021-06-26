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
    public class ViewRequestController : ApiController
    {
        private readonly ViewRequestService requestservice;
        public ViewRequestController()
        {
            requestservice = new ViewRequestService();
        }

        protected override void Dispose(bool disposing)
        {
            requestservice.Dispose();
            base.Dispose(disposing);
        }

        [HttpGet]
        [Route("api/ViewRequest/GetUsersRequest/{RequestId}")]
        public HttpResponseMessage GetUsersRequest([FromUri] int RequestId)
        {
            var req = requestservice.GetSingleRequest(RequestId);
            if (req == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "RequestId not found");
            return Request.CreateResponse(HttpStatusCode.OK, req);
        }


        [HttpGet]
        [Route("api/ViewRequest/GetRequest/{userId}")]
        public HttpResponseMessage GetRequest([FromUri] int userId)
        {
            var request = requestservice.GetAllRequest(userId);
            if(request==null || request.Count==0)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "DeviceId not found");
            return Request.CreateResponse(HttpStatusCode.OK, request);

        }
    }
}
