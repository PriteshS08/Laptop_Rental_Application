using LaptopRental.API.Dtos;
using LaptopRental.BLL;
using LaptopRental.BLL.Services;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class EditDevicesController : ApiController
    {
        LaptopRentalContext context = new LaptopRentalContext();
        EditDeviceService service = new EditDeviceService();

        public EditDevicesController()
        {
            service = new EditDeviceService();
        }
        [HttpPut]
        [Route("api/EditDevices/{DeviceId}")]
        public HttpResponseMessage Update([FromUri] int DeviceId, [FromBody] Device device)
        {
            try
            {

                var query = context.Devices.FirstOrDefault(s => s.DeviceId == DeviceId);
                if (query == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {
                   
                    query.IMEINumber = device.IMEINumber;
                    query.DeviceName = device.DeviceName;
                    query.DeviceSpecification = device.DeviceSpecification;
                    query.PreInstalledSoftware = device.PreInstalledSoftware;
                    query.DeviceImage = device.DeviceImage;
                    query.RentalAmount = device.RentalAmount;
                    query.MaxRentalMonth = device.MaxRentalMonth;
                    query.Interest = device.Interest;
                    query.Status = device.Status;
                    query.UserId_FK = device.UserId_FK;

                    context.SaveChanges();
                    
                        return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");
                    
                }


            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPost]
        public IHttpActionResult Edit(EditDto dto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var edit = new Device();
                edit.IMEINumber = dto.IMEINumber;
                edit.DeviceName = dto.DeviceName;
                edit.DeviceSpecification = dto.DeviceSpecification;
                edit.PreInstalledSoftware = dto.PreInstalledSoftware;
                edit.DeviceImage = dto.DeviceImage;
                edit.RentalAmount = dto.RentalAmount;
                edit.MaxRentalMonth = dto.MaxRentalMonth;
                edit.Interest = dto.Interest;
                var uploadfolderpath =HttpContext.Current.Server.MapPath("~/Uploads/");
                dto.File.SaveAs(uploadfolderpath + dto.DeviceImage);
                var isadded = service.Add(edit);
                if (isadded)
                    return StatusCode(HttpStatusCode.Created);
                return BadRequest("Create menu item failed");
            }
            catch (LaptopRentalException ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
