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
    public class EditDevicesController : ApiController
    {
        LaptopRentalContext context = new LaptopRentalContext();
        [HttpPut]
        [Route("api/EditDevices/{DeviceId}")]
        public HttpResponseMessage UpdatePassword([FromUri] int DeviceId, [FromBody] Device device)
        {
            try
            {

                var query = context.Devices.FirstOrDefault(s => s.DeviceId == DeviceId);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                   
                    query.IMEINumber = device.IMEINumber;
                    query.DeviceName = device.DeviceName;
                    query.DeviceSpecification = device.DeviceSpecification;
                    query.PreInstalledSoftware = device.PreInstalledSoftware;
                    query.Ratings = device.Ratings;
                    query.DeviceImage = device.DeviceImage;
                    query.RentalAmount = device.RentalAmount;
                    query.MaxRentalMonth = device.MaxRentalMonth;
                    query.Interest = device.Interest;
                    query.Status = device.Status;
                    query.UserId_FK = device.UserId_FK;

                    context.SaveChanges();
                    
                        return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");
                    
                }


            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
