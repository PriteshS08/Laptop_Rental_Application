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
    public class ForgotPasswordController : ApiController
    {
        LaptopRentalContext context = new LaptopRentalContext();

        private readonly ForgotPasswordService fps;

        public ForgotPasswordController()
        {
            fps = new ForgotPasswordService();
        }
      
        [HttpPut]
        [Route("api/ForgotPassword/UpdatePassword")]
        public HttpResponseMessage UpdatePassword([FromBody] User user)
        {
            try
            {
                var res = fps.Update(user.EmailId, user.PassWord);
                if (res == true)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "User Id not Found");
            }
            catch (Exception ex)
            {
              return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
            //public HttpResponseMessage UpdatePassword([FromUri]string name, [FromBody] User user)
            //{
            //    try
            //    {

            //        var query = context.Users.FirstOrDefault(s => s.Name == name);
            //        var result = fps.Update(user);
            //        query.PassWord = user.PassWord;
            //        if (query == null)
            //        {
            //            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
            //        }
            //        else
            //        {
            //           // query. UserId= user.UserId;

            //            return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");
            //        }


            //    }
            //    catch (Exception ex)
            //    {
            //        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            //    }
            //}
        }
}
