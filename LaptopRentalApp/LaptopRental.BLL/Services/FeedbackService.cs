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
    public class FeedbackService
    {
        private readonly LaptopRentalContext context;
        public FeedbackService()
        {
            context = new LaptopRentalContext();
        }



        /// <summary>
        /// add the user details to the database
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>true/false based on the addition of rows</returns>
        public bool AddRating(Feedback user)
        {

            try
            {
                context.Feedbacks.Add(user);
                return context.SaveChanges() == 1;
            }
            catch (DbException ex)
            {
                throw new LaptopRentalException("Database error adding the rating", ex);
            }
            catch (Exception ex)
            {
                throw new LaptopRentalException("Unknown error while adding the rating", ex);
            }

        }

        public List<Device> GetAllDevices()
        {
            try
            {
                var query = (from device in context.Devices
                             where device.Status.ToLower() == "available"
                             select device).ToList();
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
