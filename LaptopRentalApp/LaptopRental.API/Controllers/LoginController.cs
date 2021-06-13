using LaptopRental.API.Dtos;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace LaptopRental.API.Controllers
{
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

        [HttpPost]
        [ResponseType(typeof(LoginResponse))]
        public IHttpActionResult Post([FromBody] LoginRequest model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var LoginReq = loginService.Authenticate(model.EmailId, model.Password);
            return Ok(LoginReq);
        }

            
    }
}
