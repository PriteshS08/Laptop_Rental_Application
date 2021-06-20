using LaptopRental.BLL;
using LaptopRental.BLL.Services;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class MakeRequestController : ApiController
    {
        private readonly MakeRequestService Mks;

        public MakeRequestController()
        {
            Mks = new MakeRequestService();
        }

        [HttpPost]
        [Route("api/MakeRequest/AddRequest")]
        public HttpResponseMessage AddRequest([FromBody] Request req)
        {
            try
            {
                //if (!ModelState.IsValid)
                //    return Request.CreateErrorResponse(HttpStatusCode.BadRequest,ModelState);

                var Obj = new Request();

                Obj.RequestDate = req.RequestDate;
                Obj.FromDate = req.FromDate;
                Obj.ToDate = req.ToDate;
                Obj.RequestStatus = req.RequestStatus;
                Obj.DeviceId_FK = req.DeviceId_FK;

                var isadded = Mks.AddRequest(req);
                if (isadded!=null)
                    return Request.CreateResponse(HttpStatusCode.Created, isadded);

                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (LaptopRentalException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);

            }
        }

        [HttpPut]
        [Route("api/MakeRequest/{deviceid}")]
        public HttpResponseMessage put([FromUri] int deviceid)
        {
            try
            {
                var res = Mks.Update(deviceid);
                if (res == true)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Device Id not Found");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpDelete]
        [Route("api/MakeRequest/{deviceid}")]
        public HttpResponseMessage Delete([FromUri] int deviceid)
        {
            try
            {
                var res = Mks.Delete(deviceid);
                if (res == true)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, " Id not Found");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
