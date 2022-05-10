using LaptopRental.BLL;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class EarningReportController : ApiController
    {
        private readonly LaptopRentalContext Context = new LaptopRentalContext();
        private readonly EarningReportService Service = new EarningReportService();

        public EarningReportController()
        {
            Service = new EarningReportService();
        }
        [HttpGet]
        [Route("api/EarningReport/{UserId}")]
        public HttpResponseMessage Get([FromUri] int UserId)
        {
            try
            {
                var result = Service.GetReport(UserId);
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
