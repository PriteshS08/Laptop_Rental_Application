namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 25),
                        Gender = c.String(nullable: false),
                        DOB = c.DateTime(nullable: false),
                        Location = c.String(nullable: false),
                        PhoneNO = c.String(nullable: false),
                        IdProof = c.String(nullable: false),
                        Id_No = c.String(nullable: false, maxLength: 12),
                        EmailId = c.String(nullable: false, maxLength: 50),
                        PassWord = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
        }
    }
}
