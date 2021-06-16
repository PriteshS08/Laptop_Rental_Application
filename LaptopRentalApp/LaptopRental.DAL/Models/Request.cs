using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    public class Request
    {
        [Key]
        public int RequestID{ get; set; }

        [ForeignKey("device")]
        public int DeviceID { get; set; }
        public Device device { get; set; }

        [ForeignKey("user")]
        public int UserID { get; set; }
        public User user { get; set; }
        
        public DateTime RequestDate { get; set; }

        public Double RentalAmount { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string RequestStatus { get; set; }
    }
}
