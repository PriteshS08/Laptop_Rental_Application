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
    public class AcceptRejectController : ApiController
    {
            LaptopRentalContext context = new LaptopRentalContext();
            EditDeviceService service = new EditDeviceService();

            public AcceptRejectController()
            {
                context = new LaptopRentalContext();
            }
            [HttpPut]
            [Route("api/AcceptReject/Accept")]
            public HttpResponseMessage Accept([FromBody] int deviceId)
            {
                try
                {

                    var query = context.Requests.FirstOrDefault(s => s.DeviceId_FK == deviceId);
                    if (query == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                    }
                    else
                    {
                        query.RequestStatus = "Rented";
                        context.SaveChanges();
                     var a = context.Devices.FirstOrDefault(s => s.DeviceId == query.DeviceId_FK);
                         a.Status = "Rented";
                         context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");

                    }


                }
                catch (Exception ex)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
                }
            }

        [HttpDelete]
        [Route("api/AcceptReject/Reject/{deviceId}")]
        public HttpResponseMessage Reject([FromUri] int deviceId)
        {
            try
            {

                var query = context.Requests.FirstOrDefault(s => s.DeviceId_FK == deviceId);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                    query.RequestStatus = "Rejected";
                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Data Deleted Successfully");

                }


            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}
