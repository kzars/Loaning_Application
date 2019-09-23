using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace LoanApp.Models
{
    public partial class tilde_demoContext : DbContext
    {
        public tilde_demoContext()
        {
        }

        public tilde_demoContext(DbContextOptions<tilde_demoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Loans> Loans { get; set; }
        public virtual DbSet<PayBacks> PayBacks { get; set; }
        public virtual DbSet<Person> Person { get; set; }
     

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost;Database=db;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Loans>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.HasOne(d => d.BorrowerNavigation)
                    .WithMany(p => p.LoansBorrowerNavigation)
                    .HasForeignKey(d => d.Borrower)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Loans_Person1");

                entity.HasOne(d => d.LoanerNavigation)
                    .WithMany(p => p.LoansLoanerNavigation)
                    .HasForeignKey(d => d.Loaner)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Loans_Person");
            });

            modelBuilder.Entity<PayBacks>(entity =>
            {
                entity.ToTable("Pay_backs");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Amount).HasColumnType("money");

                entity.Property(e => e.LoanId).HasColumnName("LoanID");

                entity.HasOne(d => d.Loan)
                    .WithMany(p => p.PayBacks)
                    .HasForeignKey(d => d.LoanId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Pay_backs_Loans");
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
