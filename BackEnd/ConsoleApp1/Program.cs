using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LaptopRental.BLL.Services;
using System.Data.SqlClient;
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var bcs = new BrowserCatalogueService();
            var k = bcs.GetAvailableDevices();
            Console.WriteLine(k.Count);


            var P = new Program();

            var fun = P.AvailableDevice();
            Console.WriteLine(fun);
            
            Console.ReadKey();




        }
        public int AvailableDevice()
        {
            var con = @"data source=(localdb)\MSSQLLocalDB;initial catalog=LaptopRental.DAL.LaptopRentalContext;integrated security=True";
            SqlConnection connection = new SqlConnection(con);
            var query = "select count(*) from Devices where Status='Available'";
            var command = new SqlCommand(query, connection);
            connection.Open();
            var num = command.ExecuteScalar();
            connection.Close();
            return (int)num;
        }

    }
}
