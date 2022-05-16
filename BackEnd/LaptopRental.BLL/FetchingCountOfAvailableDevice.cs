using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
namespace LaptopRental.BLL
{
    public class FetchingCountOfAvailableDevice
    {
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
