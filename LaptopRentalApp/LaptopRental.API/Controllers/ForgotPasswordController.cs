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
    public class ForgotPasswordController : ApiController
    {
        LaptopRentalContext context = new LaptopRentalContext();
        [HttpPut]
        [Route("api/ForgotPassword/{name}")]
        public HttpResponseMessage UpdatePassword([FromUri]string name, [FromBody] User user)
        {
            try
            {

                var query = context.Users.FirstOrDefault(s => s.Name == name);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                   // query. UserId= user.UserId;
                    query.PassWord = user.PassWord;

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
