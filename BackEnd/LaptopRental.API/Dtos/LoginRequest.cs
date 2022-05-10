using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LaptopRental.API.Dtos
{
    /// <summary>
    ///  Dto class to store Login details.
    /// </summary>
        public class LoginRequest
        {
            [Required]
            public string EmailId { get; set; }
            [Required]
            public string Password { get; set; }
        }
    
}