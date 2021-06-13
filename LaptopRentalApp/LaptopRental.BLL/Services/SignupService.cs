//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using LaptopRental.DAL;
//using LaptopRental.DAL.Models;
//using System.Data.Common;
//namespace LaptopRental.BLL.Services
//{
//    public class SignupService 
//    {

//        public readonly LaptopRentalContext context;
//        public SignupService()
//        {
//            var context =new LaptopRentalContext();
//        }

//        public void Dispose()
//        {
//            context.Dispose();
//        }

//        public bool AddUser(User user)
//        {
//            try
//            {
//                User obj = new User();

//               // if (obj.UserId == 0)

//                //{

//                    obj.Name = user.Name;
//                    obj.Gender = user.Gender;
//                    obj.DOB = user.DOB;
//                    obj.Age = user.Age;
//                    obj.Location = user.Location;
//                    obj.PhoneNO = user.PhoneNO;
//                    obj.IdProof = user.IdProof;
//                    obj.Id_No = user.Id_No;
//                    obj.EmailId = user.EmailId;
//                    obj.PassWord = user.PassWord;

//                    context.Users.Add(obj);
//                    var rows = context.SaveChanges();

//                    if (rows == 1)
//                    {
//                        return true;
//                    }

//               // }
//                return false;


//            }
//            catch (DbException ex)
//            {
//                throw new LaptopRentalException("Error in Writing", ex);
//            }

//            catch (Exception ex)
//            {
//                throw new LaptopRentalException("unknown error while uploading details", ex);
//            }
//        }
      

       

//    }
//}
