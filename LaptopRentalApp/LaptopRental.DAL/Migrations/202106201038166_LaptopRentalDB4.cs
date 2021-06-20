namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB4 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Returns",
                c => new
                    {
                        ReturnId = c.Int(nullable: false, identity: true),
                        ReturnDate = c.DateTime(nullable: false),
                        DueStatus = c.String(),
                        DeviceId_Fk = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ReturnId)
                .ForeignKey("dbo.Devices", t => t.DeviceId_Fk, cascadeDelete: true)
                .Index(t => t.DeviceId_Fk);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Returns", "DeviceId_Fk", "dbo.Devices");
            DropIndex("dbo.Returns", new[] { "DeviceId_Fk" });
            DropTable("dbo.Returns");
        }
    }
}
