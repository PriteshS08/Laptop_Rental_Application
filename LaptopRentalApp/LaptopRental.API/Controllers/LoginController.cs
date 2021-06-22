﻿using LaptopRental.API.Dtos;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace LaptopRental.API.Controllers
{
    /// <summary>
    /// LoginController class to work with angular.
    /// </summary>
    public class LoginController : ApiController
    {

        private readonly LoginService loginService;
        private readonly LaptopRentalContext context;
        public LoginController()
        {
            loginService = new LoginService();
            context = new LaptopRentalContext();
        }

        protected override void Dispose(bool disposing)
        {
            loginService.Dispose();
            base.Dispose(disposing);
        }

        /// <summary>
        /// Post method for the Login page
        /// </summary>
        /// <param name="model"></param>
        /// <returns> Ok if Validation is Succesfull </returns>


        [HttpPost]
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult Post([FromBody] LoginRequest model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var LoginReq = loginService.Authenticate(model.EmailId, model.Password);
            return Ok(LoginReq);
        }

       //[HttpGet]
       //[Route("api/Login/RetrieveUserId")]
       //public IHttpActionResult RetrieveUserId([FromBody] User obj)
       // {
       //     int result = (from user in context.Users
       //                   where user.EmailId == obj.EmailId
       //                   select user.UserId).SingleOrDefault();
       //     if (result == 0)
       //         return NotFound();
       //     return Ok(result);
       // }


    }
}
