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
        public HttpResponseMessage Update([FromUri] int DeviceId, [FromBody]EditDto dto)
        {
            try
            {

                var UpdateDetail = context.Devices.FirstOrDefault(s => s.DeviceId == DeviceId);
                if (UpdateDetail == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Searched data not found");
                }
                else
                {

                    UpdateDetail.IMEINumber = dto.IMEINumber;
                    UpdateDetail.DeviceName = dto.DeviceName;
                    UpdateDetail.DeviceSpecification = dto.DeviceSpecification;
                    UpdateDetail.PreInstalledSoftware = dto.PreInstalledSoftware;
                    UpdateDetail.DeviceImage = dto.DeviceImage;
                    UpdateDetail.RentalAmount = dto.RentalAmount;
                    UpdateDetail.MaxRentalMonth = dto.MaxRentalMonth;
                    UpdateDetail.Interest = dto.Interest;
                    UpdateDetail.Status = dto.Status;
                    UpdateDetail.UserId_FK = dto.UserId_FK;
                    var uploadfolderpath = HttpContext.Current.Server.MapPath("~/Uploads/");
                    dto.File.SaveAs(uploadfolderpath + dto.DeviceImage);
                   var rows= context.SaveChanges();
                    if (rows==1)
                        return Request.CreateResponse(HttpStatusCode.OK, "Data Updated Successfully");
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Data Updated failed");

                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
