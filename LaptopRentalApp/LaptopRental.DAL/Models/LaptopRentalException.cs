using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    public class LaptopRentalException : Exception
    {
        public LaptopRentalException() : base() { }
        public LaptopRentalException(string message) : base(message) { }
        public LaptopRentalException(string message, Exception innerException) : base(message, innerException) { }
    }
}
