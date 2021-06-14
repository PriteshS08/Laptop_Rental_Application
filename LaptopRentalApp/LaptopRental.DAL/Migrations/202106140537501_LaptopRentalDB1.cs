namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Devices", "IMEINumber", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Devices", "IMEINumber", c => c.Int(nullable: false));
        }
    }
}
