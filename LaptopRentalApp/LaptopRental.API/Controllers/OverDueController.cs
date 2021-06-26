using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;

namespace LaptopRental.API.Controllers
{
    public class OverDueController : ApiController
    {
        private readonly OverDueService overDueService;
        private readonly LaptopRentalContext context;
        public OverDueController()
        {
            overDueService = new OverDueService();
            context = new LaptopRentalContext();
        }

        protected override void Dispose(bool disposing)
        {
            overDueService.Dispose();
            base.Dispose(disposing);
        }
        [HttpGet]
        [Route("api/OverDue/GetByDeviceID/{requestId}")]
        public IHttpActionResult GetByDeviceID([FromUri] int requestId)
        {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                var res = overDueService.getDeviceDetails(requestId);
                if (res != null)
                {
                    return Ok(res);
                }
            return NotFound();
        }

        [HttpGet]
        [Route("api/OverDue/GetAllOverDue")]
        public IHttpActionResult GetAllOverDue()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var res = overDueService.getOverDueDevices();
            if (res != null)
            {
                return Ok(res);
            }
            return BadRequest();
        }
    }
}
