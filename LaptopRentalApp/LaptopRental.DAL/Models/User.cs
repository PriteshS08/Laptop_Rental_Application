using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    /// <summary>
    /// class to store User details.
    /// </summary>
    public class User
    {
        /// <summary>
        /// Gets or Sets Id of User.
        /// </summary>
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Gender { get; set; }

        
        [DataType(DataType.Date)]
        public DateTime DOB { get; set; }

        [Required]
        public int Age { get; set; }


        [Required]
        public string Location { get; set; }


        [Required]
        public string PhoneNO { get; set; }

        [Required]
        public string idproof { get; set; }

        [Required]
        public string Id_No { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        public string EmailId { get; set; }

        [DataType(DataType.Password)]
        [Required]
        public string PassWord { get; set; }

        
    }
}
