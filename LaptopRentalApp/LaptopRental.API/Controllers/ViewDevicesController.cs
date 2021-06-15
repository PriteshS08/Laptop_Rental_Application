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
            //var listOfUserId = context.Devices.Select(r => r.UserId_FK);
            //var roles = context.Devices.Where(r => listOfUserId.Contains(r.UserId_FK));
            //if (roles == null)
            //{
            //    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
            //}
            //return Request.CreateErrorResponse(HttpStatusCode.OK, roles.ToString());

            //var listOfRoleId = user.Roles.Select(r => r.RoleId);
            //var roles = db.Roles.Where(r => listOfRoleId.Contains(r.RoleId));

            //if (!ModelState.IsValid)
            //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            //var devices = viewDeviceService.GetDeviceById(id);
            //if (devices == null)
            //    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
            //return Request.CreateErrorResponse(HttpStatusCode.OK, devices.ToString());


            var entity = context.Devices.FirstOrDefault(d => d.UserId_FK == id);
            if (entity != null)
            {

                return Request.CreateResponse(HttpStatusCode.OK, entity);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, "Searched Data not Found");
            }
        }

    }
}