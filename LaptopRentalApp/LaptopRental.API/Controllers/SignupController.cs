using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LaptopRental.BLL;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.Swagger;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
namespace LaptopRental.API.Controllers

{
  
    /// <summary>
    /// SignUpController class to work with angular.
    /// </summary>
   
   public class SignupController : ApiController

    {

        LaptopRentalContext context = new LaptopRentalContext();
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
            if (ModelState.IsValid == false)
            return Request.CreateResponse(HttpStatusCode.BadRequest);

            try
            {

                User obj = new User();

                if (obj.UserId == 0)

                {

                    obj.Name = user.Name;
                    obj.Gender = user.Gender;
                    obj.DOB = user.DOB;
                    obj.Age = user.Age;
                    obj.Location = user.Location;
                    obj.PhoneNO = user.PhoneNO;
                    obj.IdProof = user.IdProof;
                    obj.Id_No = user.Id_No;
                    obj.EmailId = user.EmailId;
                    obj.PassWord = user.PassWord;

                    context.Users.Add(obj);

                    context.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created);
                }
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
               // if (ModelState.IsValid == false)
               // return Request.CreateResponse(HttpStatusCode.BadRequest);
            //try
            //{
            //    var result = Signup.AddUser(user);
            //    return Request.CreateResponse(HttpStatusCode.Created);
            //}
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
