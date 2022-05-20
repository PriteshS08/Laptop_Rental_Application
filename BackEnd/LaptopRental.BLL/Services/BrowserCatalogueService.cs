using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;

namespace LaptopRental.BLL.Services
{
    public class BrowserCatalogueService
    {
        private readonly LaptopRentalContext context;

        public BrowserCatalogueService()
        {
            context = new LaptopRentalContext();
        }
        public void Dispose()
        {
            context.Dispose();
        }
        public List<Device> GetAvailableDevices()
        {

            //var con = ConfigurationManager.ConnectionStrings["LaptopRentalContext"].ConnectionString;
            var Devicelist = new List<Device>();
            var con = @"data source=(localdb)\MSSQLLocalDB;initial catalog=LaptopRental.DAL.LaptopRentalContext;integrated security=True";
            SqlConnection connection = new SqlConnection(con);
            var query = "select * from Devices where Status='Available'";
            var command = new SqlCommand(query, connection);
            try
            {

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();
                if (reader.HasRows)
                {
                    Device D = null;
                    while (reader.Read())
                    {
                        D = new Device();
                        D.DeviceId = reader.GetInt32(0);
                        D.IMEINumber = reader.GetString(1);
                        D.DeviceName = reader.GetString(2);
                        D.DeviceSpecification = reader.GetString(3);
                        D.PreInstalledSoftware = reader.GetString(4);
                        D.DeviceImage = reader.GetString(5);
                        D.RentalAmount = reader.GetDouble(6);
                        D.MaxRentalMonth = reader.GetInt32(7);
                        D.Interest = reader.GetDouble(8);
                        D.Status = reader.GetString(9);
                        D.UserId_FK = reader.GetInt32(10);

                        Devicelist.Add(D);

                    }
                    reader.Close();
                }

                 
                //var query = (from device in context.Devices
                //             where device.Status.ToLower() == "available"
                //            select device).ToList();
                //return query;
            }
            //catch (DbException ex)
            //{
            //    throw new LaptopRentalException("Error reading data", ex);
            //}

            catch (Exception ex)
            {
                throw new LaptopRentalException("UnKnown Error while reading data", ex);
            }
            return Devicelist;

        }

        public Device GetDevice( int num)
        {
            try
            {
                var query = (from device in context.Devices
                             where device.DeviceId == num
                             select device).SingleOrDefault();
                return query;
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

        public Device GetDeviceByImei(string imei)
        {
            try
            {
                var query = (from device in context.Devices
                             where device.IMEINumber == imei
                             select device).SingleOrDefault();
                return query;
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
