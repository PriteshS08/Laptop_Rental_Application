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
        public int RequestId { get; set; }

        public DateTime RequestDate { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string RequestStatus { get; set; }


        [ForeignKey("Device")]
        public int DeviceId_FK { get; set; }
        public Device Device { get; set; }

    }
}
