using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.ModelBinding;

namespace LaptopRental.API.Dtos
{

    [ModelBinder(typeof(EditBinder))]
    public class EditDto
    {
     
        public int DeviceId { get; set; }

  
        public string IMEINumber { get; set; }

      
        public string DeviceName { get; set; }

       
        public string DeviceSpecification { get; set; }

    
        public string PreInstalledSoftware { get; set; }

        
        public double Ratings { get; set; }
        public string DeviceImage { get; set; }

        public HttpPostedFile File { get; set; }

       
        public double RentalAmount { get; set; }

     
        public int MaxRentalMonth { get; set; }

      
        public double Interest { get; set; }

      
        public string Status { get; set; }

      
    }
}