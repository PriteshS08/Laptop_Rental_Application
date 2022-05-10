using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.ModelBinding;

namespace LaptopRental.API.Dtos
{
    public class EditBinder: IModelBinder
    {
        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            var Request = HttpContext.Current.Request;
            if (Request.Files.Count == 0)
                return false;
            HttpPostedFile file = Request.Files[0];
            var jsonstring = Request.Form.Get("UpdateDetail");
            var editdevicedto = JsonConvert.DeserializeObject<EditDto>(jsonstring);
            if (editdevicedto != null)
            {
                editdevicedto.File = file;
                var filename = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                editdevicedto.DeviceImage = filename;
                bindingContext.Model = editdevicedto;
                return true;
            }
            return false;
        }

      
    }
}