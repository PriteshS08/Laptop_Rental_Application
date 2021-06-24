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
            [Route("api/AcceptReject/Accept/{UserId}")]
            public HttpResponseMessage Accept([FromUri] int UserId)
            {
                try
                {

                    var query = context.Requests.FirstOrDefault(s => s.UserId_FK == UserId);
                    if (query == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                    }
                    else
                    {
                        query.RequestStatus = "Accepted";
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
        [Route("api/AcceptReject/Reject/{UserId}")]
        public HttpResponseMessage Reject([FromUri] int UserId)
        {
            try
            {

                var query = context.Requests.FirstOrDefault(s => s.UserId_FK == UserId);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                    context.Requests.Remove(query);
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
