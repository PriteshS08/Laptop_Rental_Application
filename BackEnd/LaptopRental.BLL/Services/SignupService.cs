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
            context = new LaptopRentalContext();
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
                var data = context.Users.FirstOrDefault(u=>u.EmailId==user.EmailId);
                if (data == null)
                {
                    context.Users.Add(user);
                    var obj= context.SaveChanges();
                    if (obj == 1)
                        return true;
                    return false;
                }
                return false;           
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error adding the menu item", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while adding menu items", ex);
            }

        }
    }
}