using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LaptopRental.BLL.Services;
namespace ConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            var BCS = new BrowserCatalogueService();
            var DeviceData = BCS.GetAvailableDevices();
            foreach (var D in DeviceData)
            {
                Console.WriteLine($"DeviceId:{D.DeviceId} | IMEINumber :{D.IMEINumber} | DeviceName:{D.DeviceName} | DeviceSpecification : {D.DeviceSpecification} | PreInstalledSoftware : {D.PreInstalledSoftware} | DeviceImage : {D.DeviceImage} | RentalAmount : {D.RentalAmount}");
                Console.WriteLine($"Interest : {D.Interest} | Status : {D.Status} | UserId_FK : {D.UserId_FK} ");

                Console.WriteLine();
                //Console.WriteLine($"DeviceId:{D.DeviceId} | IMEINumber :{D.IMEINumber} | DeviceName:{D.DeviceName}");
            }
            Console.ReadKey();
        }
    }
}
