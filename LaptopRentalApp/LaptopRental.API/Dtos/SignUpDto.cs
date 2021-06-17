using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ModelBinding;

namespace LaptopRental.API.Dtos
{
    [ModelBinder(typeof(SignUpDtoBinder))]
    public class SignUpDto
    {
       
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime DOB { get; set; }
        public int Age { get; set; }
        public string Location { get; set; }
        public string PhoneNO { get; set; }
        public string IdProof { get; set; }
        public HttpPostedFile File { get; set; }
        public string Id_No { get; set; }
        public string EmailId { get; set; }
        public string PassWord { get; set; }

    }
}