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
        public HttpResponseMessage AddRequest(Request req)
        {
            try
            {
                //if (!ModelState.IsValid)
                //    return BadRequest(ModelState);

                var Obj = new Request();
                Obj.RequestId = req.RequestId;
                Obj.RequestDate = req.RequestDate;
                Obj.FromDate = req.FromDate;
                Obj.ToDate = req.ToDate;
                Obj.RequestStatus = req.RequestStatus;
                Obj.DeviceId_FK = req.DeviceId_FK;

                var isadded = Mks.AddRequest(Obj);
                if (isadded)
                    return Request.CreateResponse(HttpStatusCode.Created, Obj);

                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (LaptopRentalException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);

            }
        }
    }
}
