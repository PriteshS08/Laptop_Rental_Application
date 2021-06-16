﻿using LaptopRental.BLL;
using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class CatalogueController : ApiController
    {
        public readonly BrowserCatalogueService catalogueService;
        public CatalogueController()
        {
            catalogueService = new BrowserCatalogueService();

        }
        //protected override void Dispose(bool disposing)
        //{
        //    base.Dispose(disposing);
        //}

        [HttpGet]
        public HttpResponseMessage DisplayAllDevice()
        {
            try
            {
                var result = catalogueService.GetAllDevices();
                return Request.CreateResponse(HttpStatusCode.Created,result);

            }
            catch (LaptopRentalException ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }

        }
    }
}
