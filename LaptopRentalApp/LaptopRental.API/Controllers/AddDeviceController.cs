using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LaptopRental.BLL;

namespace LaptopRental.API.Controllers
{
    public class AddDeviceController : ApiController
    {
        public readonly AddDeviceService AddService;
        public AddDeviceController()
        {
            AddService = new AddDeviceService();  
        }

        [HttpPost]
        public HttpResponseMessage Add([FromBody] Device device)
        {
            try
            {
                AddService.AddDevice(device);

                return Request.CreateResponse(HttpStatusCode.Created);

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
