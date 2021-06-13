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

        public readonly LaptopRentalContext context;
        
        public bool AddUser(User user)
        {
            context.Users.Add(user);
            var rows = context.SaveChanges();
            if (rows == 1)
            {
                return true;
            }
            return false;
        }
    }
}