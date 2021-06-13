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
    public class SignupController : ApiController 
    {
        private readonly SignupService signup;

        public SignupController()
        {
            signup = new SignupService();
        }
        //protected override void Dispose(bool disposing)
        //{
        //    signup.Dispose();
        //    base.Dispose(disposing);
        //}

-        public HttpResponseMessage PostDetails([FromBody] User obj)
        {
            //if (ModelState.IsValid == false)
            //    return Request.CreateResponse(HttpStatusCode.BadRequest);
            try
            {
                bool saved = signup.Add(obj);
                if (saved)
                    return Request.CreateResponse(HttpStatusCode.Created);
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            catch (LaptopRentalException ex)
            {
                return  Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
                 
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, obj);
            }
        }

    }
}
