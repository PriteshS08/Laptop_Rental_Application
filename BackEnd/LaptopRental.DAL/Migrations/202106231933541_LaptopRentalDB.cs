namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Devices",
                c => new
                    {
                        DeviceId = c.Int(nullable: false, identity: true),
                        IMEINumber = c.String(nullable: false),
                        DeviceName = c.String(nullable: false),
                        DeviceSpecification = c.String(nullable: false),
                        PreInstalledSoftware = c.String(nullable: false),
                        DeviceImage = c.String(),
                        RentalAmount = c.Double(nullable: false),
                        MaxRentalMonth = c.Int(nullable: false),
                        Interest = c.Double(nullable: false),
                        Status = c.String(nullable: false),
                        UserId_FK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.DeviceId)
                .ForeignKey("dbo.Users", t => t.UserId_FK, cascadeDelete: false)
                .Index(t => t.UserId_FK);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Gender = c.String(nullable: false),
                        Age = c.Int(nullable: false),
                        Location = c.String(nullable: false),
                        PhoneNO = c.String(nullable: false),
                        IdProof = c.String(nullable: false),
                        Id_No = c.String(nullable: false),
                        EmailId = c.String(nullable: false),
                        PassWord = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.Feedbacks",
                c => new
                    {
                        FeedbackId = c.Int(nullable: false, identity: true),
                        Comment = c.String(),
                        Ratings = c.Single(nullable: false),
                        FeedBackDate = c.DateTime(nullable: false),
                        UserId_FK = c.Int(nullable: false),
                        DeviceID_FK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.FeedbackId)
                .ForeignKey("dbo.Devices", t => t.DeviceID_FK, cascadeDelete: false)
                .ForeignKey("dbo.Users", t => t.UserId_FK, cascadeDelete: false)
                .Index(t => t.UserId_FK)
                .Index(t => t.DeviceID_FK);
            
            CreateTable(
                "dbo.Requests",
                c => new
                    {
                        RequestId = c.Int(nullable: false, identity: true),
                        RequestDate = c.DateTime(nullable: false),
                        FromDate = c.DateTime(nullable: false),
                        ToDate = c.DateTime(nullable: false),
                        RequestStatus = c.String(),
                        DeviceId_FK = c.Int(nullable: false),
                        UserId_FK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.RequestId)
                .ForeignKey("dbo.Devices", t => t.DeviceId_FK, cascadeDelete: false)
                .ForeignKey("dbo.Users", t => t.UserId_FK, cascadeDelete: false)
                .Index(t => t.DeviceId_FK)
                .Index(t => t.UserId_FK);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Requests", "UserId_FK", "dbo.Users");
            DropForeignKey("dbo.Requests", "DeviceId_FK", "dbo.Devices");
            DropForeignKey("dbo.Feedbacks", "UserId_FK", "dbo.Users");
            DropForeignKey("dbo.Feedbacks", "DeviceID_FK", "dbo.Devices");
            DropForeignKey("dbo.Devices", "UserId_FK", "dbo.Users");
            DropIndex("dbo.Requests", new[] { "UserId_FK" });
            DropIndex("dbo.Requests", new[] { "DeviceId_FK" });
            DropIndex("dbo.Feedbacks", new[] { "DeviceID_FK" });
            DropIndex("dbo.Feedbacks", new[] { "UserId_FK" });
            DropIndex("dbo.Devices", new[] { "UserId_FK" });
            DropTable("dbo.Requests");
            DropTable("dbo.Feedbacks");
            DropTable("dbo.Users");
            DropTable("dbo.Devices");
        }
    }
}
