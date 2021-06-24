using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Dto
{
    public class RequestStatusDto
    {
        public int RequestId { get; set; }
        public string RequestStatus { get; set; }
        public string IMEINumber { get; set; }
        public string DeviceName { get; set; }
        public string DeviceImage { get; set; }
    }
}
