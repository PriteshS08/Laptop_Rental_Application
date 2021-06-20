using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    public class Return
    {
        [Key]
        public int ReturnId { get; set; }
        public int ReturnDate { get; set; }
        public string DueStatus { get; set; }

        [ForeignKey("Device")]
        public int DeviceId_Fk { get; set; }
        public Device Device { get; set; }
    }
}
