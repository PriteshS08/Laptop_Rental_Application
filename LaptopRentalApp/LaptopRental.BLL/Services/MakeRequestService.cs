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
    public class MakeRequestService
    {
        private readonly LaptopRentalContext context;
        public MakeRequestService()
        {
            context = new LaptopRentalContext();
        }
        public bool AddRequest(Request obj)
        {

            try
            {
                context.Requests.Add( obj);
                context.SaveChanges();
                return true;
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error adding ", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while adding ", ex);
            }

        }
    }
}
