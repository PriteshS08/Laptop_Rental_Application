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
       
    }
}