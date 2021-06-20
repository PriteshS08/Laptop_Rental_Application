namespace LaptopRental.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LaptopRentalDB6 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Returns", "ReturnDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Returns", "ReturnDate", c => c.Int(nullable: false));
        }
    }
}
