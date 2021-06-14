
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
            context =new LaptopRentalContext();
        }



        /// <summary>
        /// add the user details to the database
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>true/false based on the addition of rows</returns>
    public bool Add(User user)
    {
       
       
            try
            {
                context.Users.Add(user);
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
                throw new LaptopRentalException("Error in Writing", ex);
            }
       
    }
}
}