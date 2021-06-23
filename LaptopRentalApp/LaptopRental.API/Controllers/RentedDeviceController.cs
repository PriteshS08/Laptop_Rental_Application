using LaptopRental.BLL;
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
    public class RentedDeviceController : ApiController
    {
       private readonly  LaptopRentalContext Context = new LaptopRentalContext();
       private readonly RentedDeviceService Service = new RentedDeviceService();
        public RentedDeviceController()
        {
            Service = new RentedDeviceService();
        }

        [HttpGet]
        [Route("api/RentedDevices/{UserId}")]   
        public HttpResponseMessage GetRentedDeviceById([FromUri] Request Obj)
        {
            try
            {
                var result = Service.GetRentedDevices(Obj.UserId_FK);
                return Request.CreateResponse(HttpStatusCode.Created, result);
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
