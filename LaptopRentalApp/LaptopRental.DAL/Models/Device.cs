using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
   public class Device
    {
        [Key]
        public int DeviceId { get; set; }

        [Required]
        public string IMEINumber { get; set; }

        [Required]
        public string DeviceName { get; set; }

        [Required]
        public string DeviceSpecification { get; set; }

        [Required]
        public string PreInstalledSoftware { get; set; }


        public string DeviceImage { get; set; }

        [Required]
        public double RentalAmount { get; set; }

        [Required]
        public int  MaxRentalMonth { get; set; }

        [Required]
        public double Interest { get; set;}

        [Required]
        public string  Status  { get; set; }

        [ForeignKey("user")]
        public int UserId_FK { get; set; }

        public User user { get; set; } // Navigation Property


    }
}
