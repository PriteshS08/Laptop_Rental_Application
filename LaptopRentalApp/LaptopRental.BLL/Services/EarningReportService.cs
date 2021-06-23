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
    public class EarningReportService
    {
        public readonly LaptopRentalContext context;
        public EarningReportService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }
        public List<Device> GetReport(int UserId)
        {
            try
            {
                List<Device> Dev = context.Devices.ToList();
                //List<Return> Ret = context.Returns.ToList();

                var query = from device in Dev
                            where device.Status.ToLower() == "returned" && device.UserId_FK == UserId
                            select device;

                if (query != null)
                {
                    return query.ToList();

                }
                return new List<Device>();
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error fetching data", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while fetching data", ex);
            }
        }
    }
}
