using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LaptopRental.API.Dtos;
using LaptopRental.BLL.Services;
using NUnit.Framework;


namespace LaptopRental.BLL.Test
{
    [TestFixture]
    public class LoginService_Should
    {
        private LoginService service;
        [OneTimeSetUp]
        public void Init()
        {
            service = new LoginService();
        }
        [OneTimeTearDown]
        public void cleanup()
        {
            service.Dispose();
        }

        [Test]
        public void check_Login_Validation(LoginRequest model)
        {
            bool result = service.Authenticate(model.EmailId,model.Password);
            Assert.IsTrue(result);
        }
    }
}
