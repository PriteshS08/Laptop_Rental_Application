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
        public IHttpActionResult GetByDeviceID([FromBody] Request req)
        {
            if ((req.DeviceId_FK !=0) && (req.ToDate < DateTime.Now))
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);
                var res = overDueService.getDeviceDetails(req.DeviceId_FK);
                if (res != null)
                {
                    return Ok(res);
                }
            }
            return NotFound();
        }

        [HttpGet]
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
