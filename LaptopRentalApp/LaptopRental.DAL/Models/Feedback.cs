using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LaptopRental.DAL.Models
{
    public class Feedback
    {
        [Key]
        public int FeedbackId { get; set; }
        public string Comment { get; set; }
        public float Ratings { get; set; }
        public DateTime FeedBackDate { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public User User { get; set; }      //nav prop
    }
}
