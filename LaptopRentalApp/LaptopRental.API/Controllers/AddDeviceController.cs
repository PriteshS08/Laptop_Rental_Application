using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LaptopRental.BLL;
using LaptopRental.API.Dtos;
using System.Web;

namespace LaptopRental.API.Controllers
{
    public class AddDeviceController : ApiController
    {
        public readonly AddDeviceService AddService;
        public AddDeviceController()
        {
            AddService = new AddDeviceService();  
        }

        [HttpPost]
        public IHttpActionResult AddDevice(AddDeviceDto dto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var Obj = new Device();
                Obj.IMEINumber = dto.IMEINumber;
                Obj.DeviceName = dto.DeviceName;
                Obj.DeviceSpecification = dto.DeviceSpecification;
                Obj.PreInstalledSoftware = dto.PreInstalledSoftware;
                Obj.DeviceImage = dto.DeviceImage;
                Obj.RentalAmount = dto.RentalAmount;
                Obj.MaxRentalMonth = dto.MaxRentalMonth;
                Obj.Interest = dto.Interest;
                Obj.Status = dto.Status;
                Obj.UserId_FK = dto.UserId_FK;
                var uploadfolderpath = HttpContext.Current.Server.MapPath("~/Uploads/");
                dto.File.SaveAs(uploadfolderpath + dto.DeviceImage);
                var isadded = AddService.Add(Obj);
                if (isadded)
                    return StatusCode(HttpStatusCode.Created);
                return BadRequest("Add device failed");
            }
            catch(LaptopRentalException ex)
            {
                return InternalServerError(ex);
            }

        }
    }
}
