using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Models
{
    public class LoansDataAccessLayer
    {
        tilde_demoContext db = new tilde_demoContext();

        public IEnumerable<Loans> GetAllLoans()
        {
            try
            {
                return db.Loans.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To add new person record   
        public int AddLoan(Loans loans)
        {
            try
            {
                db.Loans.Add(loans);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }


    }
}
