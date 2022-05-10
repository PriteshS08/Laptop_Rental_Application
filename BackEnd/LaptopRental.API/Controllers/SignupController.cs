using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using LaptopRental.API.Dtos;
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



       
        private readonly SignupService Signupservice;

        public SignupController()
        {
            Signupservice = new SignupService();
        }


        /// <summary>
        /// Post method for the SignUp page
        /// </summary>
        /// <param name="model"></param>
        /// <returns> created if User details saved to the database </returns>

        [HttpPost]

        public IHttpActionResult AddPost(SignUpDto dto)

        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var signup = new User();
                signup.Name = dto.Name;
                signup.Gender = dto.Gender;
                signup.Age = dto.Age;
                signup.Location = dto.Location;
                signup.PhoneNO = dto.PhoneNO;
                signup.IdProof = dto.IdProof;
                signup.Id_No = dto.Id_No;
                signup.EmailId = dto.EmailId;
                signup.PassWord = dto.PassWord;

                var uploadfolderpath = HttpContext.Current.Server.MapPath("~/Uploads/");
                dto.File.SaveAs(uploadfolderpath + dto.IdProof);
                var isadded = Signupservice.Add(signup);
                if (isadded)
                    return StatusCode(HttpStatusCode.Created);
                return BadRequest("You already have an account. Kindly login to proceed!!!");
            }
            catch (LaptopRentalException ex)
            {
                return InternalServerError(ex);
            }
        }


    }


}

