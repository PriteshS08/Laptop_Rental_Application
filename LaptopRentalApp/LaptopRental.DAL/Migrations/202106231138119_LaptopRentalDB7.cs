namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB7 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Requests", "UserId_FK", c => c.Int(nullable: true));
            CreateIndex("dbo.Requests", "UserId_FK");
            AddForeignKey("dbo.Requests", "UserId_FK", "dbo.Users", "UserId", cascadeDelete: false);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Requests", "UserId_FK", "dbo.Users");
            DropIndex("dbo.Requests", new[] { "UserId_FK" });
            DropColumn("dbo.Requests", "UserId_FK");
        }
    }
}
