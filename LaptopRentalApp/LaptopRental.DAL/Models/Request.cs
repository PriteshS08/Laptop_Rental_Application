using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    public class Request
    {
        [Key]
        public int RequestId { get; set; }
        public int MyProperty { get; set; }
    }
}
