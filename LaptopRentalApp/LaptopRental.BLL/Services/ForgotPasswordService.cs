using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.BLL.Services
{
    public class ForgotPasswordService
    {
        private readonly LaptopRentalContext context;
        public ForgotPasswordService()
        {
            context = new LaptopRentalContext();
        }
        public bool Update(User user)
        {


            try
            {


                var rows = context.SaveChanges();
                if (rows == 1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            
             catch (DbException ex)
            {
                return true;
                throw new LaptopRentalException("Error in updating", ex);
            }
        }
    } 
}