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
    /// <summary>
    /// Loginservice to interact with User databse and perform Authentication.
    /// </summary>
    public class LoginService : IDisposable
    {
        private readonly LaptopRentalContext context;
        public LoginService()
        {
            context = new LaptopRentalContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        /// <summary>
        /// Check the validation and retrieve mailId and Password.
        /// </summary>
        /// <param name="emailId"></param>
        /// <param name="password"></param>
        /// <returns> true/false based on given mailId and password</returns>

        public bool Authenticate(string emailId, string password)
        {
            try
            {
                if (context.Users.Any(u => u.EmailId == emailId && u.PassWord == password))
                {
                    var result = (from user in context.Users
                                  where user.EmailId == emailId
                                  select new { user.UserId, user.EmailId }).Single();
                    if (result != null)
                    {
                        return true;
                    }
                }
                return false;
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Error reading data", ex);
            }

            catch (Exception ex)
            {
                throw new LaptopRentalException("UnKnown Error while reading data", ex);
            }

        }
    }

}

