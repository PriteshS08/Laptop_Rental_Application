namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class db : DbMigration
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
                        Ratings = c.Double(nullable: false),
                        DeviceImage = c.String(),
                        RentalAmount = c.Double(nullable: false),
                        MaxRentalMonth = c.Int(nullable: false),
                        Interest = c.Double(nullable: false),
                        Status = c.String(nullable: false),
                        UserId_FK = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.DeviceId)
                .ForeignKey("dbo.Users", t => t.UserId_FK, cascadeDelete: true)
                .Index(t => t.UserId_FK);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Devices", "UserId_FK", "dbo.Users");
            DropIndex("dbo.Devices", new[] { "UserId_FK" });
            DropTable("dbo.Devices");
        }
    }
}
