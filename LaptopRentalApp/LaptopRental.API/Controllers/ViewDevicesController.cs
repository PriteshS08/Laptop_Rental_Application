using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    /// <summary>
    /// ViewDevicesController class to work with angular.
    /// </summary>
    public class ViewDevicesController : ApiController
    {

        private ViewDevicesService viewDeviceService;
        private readonly LaptopRentalContext context;
        public ViewDevicesController()
        {
            viewDeviceService = new ViewDevicesService();
            context = new LaptopRentalContext();
        }

        protected override void Dispose(bool disposing)
        {
            viewDeviceService.Dispose();
            base.Dispose(disposing);
        }

        /// <summary>
        /// Get method for the View my device page
        /// </summary>
        /// <param name="model"></param>
        /// <returns> all the user's device </returns>

        [HttpGet]
        public HttpResponseMessage GetDeviceForId([FromUri] int id)
        {
            var devices = viewDeviceService.GetDeviceById(id);
            if (devices == null || devices.Count==0)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
            return Request.CreateResponse(HttpStatusCode.OK, devices);
        }

    }
}