﻿using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    /// <summary>
    /// DeleteDeviceController class to work with angular.
    /// </summary>
    public class DeleteDeviceController : ApiController
    {
        private DeleteDeviceService deleteDeviceService;
        public DeleteDeviceController()
        {
            deleteDeviceService = new DeleteDeviceService();
        }

        protected override void Dispose(bool disposing)
        {
            deleteDeviceService.Dispose();
            base.Dispose(disposing);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns> Ok Response if device is Deleted</returns>


        [HttpDelete]
        [Route("api/DeleteDevice/{imeiNumber}")]
        public HttpResponseMessage DeleteUserDevice([FromUri] string imeiNumber)
        {
            if (ModelState.IsValid == false)
                return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
            var deleted = deleteDeviceService.DeleteDevicebyId(imeiNumber);
            if (deleted == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "UserId not found");
            return Request.CreateResponse(HttpStatusCode.OK, "Deleted Succcesfully");

        }
    }
}
