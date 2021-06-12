using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System.Data.Common;
namespace LaptopRental.BLL.Services
{
    public class SignupService
    {
        private readonly LaptopRentalContext context;
        public SignupService()
        {
            var context =new LaptopRentalContext();
        }
        public bool Add(User obj)
        {
            try
            {
                context.Users.Add(obj);
                int rows = context.SaveChanges();
                return rows == 1;
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Error in Writing", ex);
            }

            catch (Exception ex)
            {
                throw new LaptopRentalException("unknown error while uploading details", ex);
            }
        }

        //internal void Dispose()
        //{
        //    throw new NotImplementedException();
        //}

    }
}
