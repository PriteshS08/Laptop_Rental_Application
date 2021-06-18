namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB1 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Users", "DOB");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "DOB", c => c.DateTime(nullable: false));
        }
    }
}
