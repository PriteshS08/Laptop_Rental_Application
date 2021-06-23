namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB8 : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Feedbacks", name: "UserId", newName: "UserId_FK");
            RenameIndex(table: "dbo.Feedbacks", name: "IX_UserId", newName: "IX_UserId_FK");
            AddColumn("dbo.Feedbacks", "DeviceID_FK", c => c.Int(nullable: true));
            CreateIndex("dbo.Feedbacks", "DeviceID_FK");
            AddForeignKey("dbo.Feedbacks", "DeviceID_FK", "dbo.Devices", "DeviceId", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Feedbacks", "DeviceID_FK", "dbo.Devices");
            DropIndex("dbo.Feedbacks", new[] { "DeviceID_FK" });
            DropColumn("dbo.Feedbacks", "DeviceID_FK");
            RenameIndex(table: "dbo.Feedbacks", name: "IX_UserId_FK", newName: "IX_UserId");
            RenameColumn(table: "dbo.Feedbacks", name: "UserId_FK", newName: "UserId");
        }
    }
}
