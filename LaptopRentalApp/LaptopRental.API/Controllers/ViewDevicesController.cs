﻿using LaptopRental.BLL.Services;
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
        public ViewDevicesController()
        {
            viewDeviceService = new ViewDevicesService();
        }

        protected override void Dispose(bool disposing)
        {
            viewDeviceService.Dispose();
            base.Dispose(disposing);
        }

        /// <summary>
        /// Get method for the View my device page
        /// </summary>
        /// <param name="id"></param>
        /// <returns> all the user's device </returns>

        [HttpGet]
        [Route("api/ViewDevices/GetDevice/{id}")]
        public HttpResponseMessage GetDevice([FromUri] int id)
        {
            var devices = viewDeviceService.GetDeviceById(id);
            if (devices == null || devices.Count == 0)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
            return Request.CreateResponse(HttpStatusCode.OK, devices);
        }

        //[HttpGet]
        //[Route("api/ViewDevices/GetUser/{id}")]
        //public HttpResponseMessage GetUser([FromUri] int id)
        //{
        //    var users = viewDeviceService.GetByUserId(id);
        //    if (users == null)
        //        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
        //    return Request.CreateResponse(HttpStatusCode.OK, users);
        //}
    }
}