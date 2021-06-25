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

                var AddDevice = new Device();
                AddDevice.IMEINumber = dto.IMEINumber;
                AddDevice.DeviceName = dto.DeviceName;
                AddDevice.DeviceSpecification = dto.DeviceSpecification;
                AddDevice.PreInstalledSoftware = dto.PreInstalledSoftware;
                AddDevice.DeviceImage = dto.DeviceImage;
                AddDevice.RentalAmount = dto.RentalAmount;
                AddDevice.MaxRentalMonth = dto.MaxRentalMonth;
                AddDevice.Interest = dto.Interest;
                AddDevice.Status = dto.Status;
                AddDevice.UserId_FK = dto.UserId_FK;
                var uploadfolderpath = HttpContext.Current.Server.MapPath("~/Uploads/");
                dto.File.SaveAs(uploadfolderpath + dto.DeviceImage);
                var isadded = AddService.Add(AddDevice);
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
