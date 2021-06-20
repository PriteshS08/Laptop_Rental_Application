using LaptopRental.BLL;
using LaptopRental.DAL;
using LaptopRental.DAL.Models;
using LaptopRental.BLL.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LaptopRental.API.Controllers
{
    public class FeedbackController : ApiController
    {
        LaptopRentalContext context = new LaptopRentalContext();




        private readonly FeedbackService feedbackService;

        public FeedbackController()
        {
            feedbackService = new FeedbackService();
        }


        /// <summary>
        /// Post method for the SignUp page
        /// </summary>
        /// <param name="model"></param>
        /// <returns> created if User details saved to the database </returns>

        [HttpPost]

        public IHttpActionResult AddPost(Feedback use)

        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var Obj = new Feedback();
                Obj.Comment = use.Comment;
                Obj.Ratings = use.Ratings;
                Obj.FeedBackDate = use.FeedBackDate;
                Obj.UserId = use.UserId;

                var isadded = feedbackService.AddRating(Obj);
                if (isadded)
                    return StatusCode(HttpStatusCode.Created);
                return BadRequest("failed");
            }
            catch (LaptopRentalException ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
