using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaptopRental.API.Dtos
{
    /// <summary>
    /// Dto class to store LoginResponse details
    /// </summary>
    public class LoginResponse
    {
        public int UserId { get; set; }
        public string EmailId { get; set; }


        //public int UserId { get; set; }
        //public string Name { get; set; }
        //public string Gender { get; set; }
        //public int Age { get; set; }
        //public string Location { get; set; }
        //public string PhoneNO { get; set; }
        //public string IdProof { get; set; }
        //public string Id_No { get; set; }
        //public string EmailId { get; set; }
        //public string PassWord { get; set; }
    }
}