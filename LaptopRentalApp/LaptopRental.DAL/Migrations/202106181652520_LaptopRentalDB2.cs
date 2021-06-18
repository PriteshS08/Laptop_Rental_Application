namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB2 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Devices", "Ratings");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Devices", "Ratings", c => c.Double(nullable: false));
        }
    }
}
