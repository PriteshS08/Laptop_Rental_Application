using LaptopRental.DAL;
using System;
using System.Collections.Generic;
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
    }
}
