using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LaptopRental.BLL;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.Swagger;
using FromBodyAttribute = Microsoft.AspNetCore.Mvc.FromBodyAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;




namespace LaptopRental.API.Controllers

{

    /// <summary>
    /// SignUpController class to work with angular.
    /// </summary>

    public class SignupController : ApiController

    {

        LaptopRentalContext context = new LaptopRentalContext();



        // [HttpPost]
        //public HttpResponseMessage SignupPost([FromBody] User user)
        //private readonly SignupService Signup;

        //public SignupController()
        //{
        //    Signup = new SignupService();
        //}


        /// <summary>
        /// Post method for the SignUp page
        /// </summary>
        /// <param name="model"></param>
        /// <returns> created if User details saved to the database </returns>

        [HttpPost]

        public HttpResponseMessage AddPost(User user)

        {
            try
            {

                context.Users.Add(user);
                context.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.Created);



            }
            catch (Exception ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        //catch (LaptopRentalException ex)
        //{
        //    return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
        //}
        //catch (Exception ex)
        //{
        //    return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
        //}


    }


}

