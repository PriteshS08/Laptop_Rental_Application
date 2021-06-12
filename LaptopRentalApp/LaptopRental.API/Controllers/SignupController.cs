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
            signup = new signup();
        }
        protected override void Dispose(bool disposing)
        {
            signup.Dispose();
            base.Dispose(disposing);
        }

        public HttpResponseMessage Post(User obj)
        {
            if (ModelState.IsValid == false)
                return BadRequest(ModelState);
            try
            {
                bool saved = signup.Add(obj);
            }
}
    }
