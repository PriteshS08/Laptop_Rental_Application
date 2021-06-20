using LaptopRental.BLL.Services;
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

        public IHttpActionResult GetUsersRequest()
        {
            var request = service.GetRequest();
            return Ok(request);
        }
    }
}
