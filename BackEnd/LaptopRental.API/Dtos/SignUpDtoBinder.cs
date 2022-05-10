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
    public class SignUpDtoBinder : IModelBinder
    {
        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            var Request = HttpContext.Current.Request;
            if (Request.Files.Count == 0)
                return false;
            HttpPostedFile file = Request.Files[0];
            var jsonstring = Request.Form.Get("signup");
            var signupdto = JsonConvert.DeserializeObject<SignUpDto>(jsonstring);
            if (signupdto != null)
            {
                signupdto.File = file;
                var filename = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                signupdto.IdProof = filename;
                bindingContext.Model = signupdto;
                return true;
            }
            return false;
        }
    }
}