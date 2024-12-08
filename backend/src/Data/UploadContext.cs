using Microsoft.EntityFrameworkCore;
using MySql.EntityFrameworkCore.Extensions;

namespace src
{
	public class UploadContext: DbContext
	{
		public DbSet<CodeSnippet> CodeSnippet {get; set;}

		    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseMySQL("server=localhost;database=library;user=user;password=password");
    }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<CodeSnippet>( entity =>
			{
				entity.Property(e => e.Snippet).IsRequired();
			});
        }


    }
}