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
        private readonly ViewRequestService service;
        public ViewRequestController()
        {
            service = new ViewRequestService();
        }

        [HttpGet]
        [Route("api/ViewRequest/GetUsersRequest/{RequestId}")]
        public IHttpActionResult GetUsersRequest([FromUri]Request obj)
        {
            var req = service.GetSingleRequest(obj.RequestId);
            return Ok(req);
        }


        [HttpGet]
        [Route("api/ViewRequest/GetRequest")]
        public IHttpActionResult GetRequest()
        {
            var request = service.GetAllRequest();
            return Ok(request);
        }
    }
}
