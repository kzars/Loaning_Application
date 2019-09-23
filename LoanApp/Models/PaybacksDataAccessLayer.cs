using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Models
{
    public class PaybacksDataAccessLayer
    {
        tilde_demoContext db = new tilde_demoContext();

        public IEnumerable<PayBacks> GetAllPaybacks()
        {
            try
            {
                return db.PayBacks.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To add new Payback's record   
        public int AddPaybacks(PayBacks paybacks)
        {
            try
            {
                db.PayBacks.Add(paybacks);
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
