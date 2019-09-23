using System;
using System.Collections.Generic;

namespace LoanApp.Models
{
    public partial class Loans
    {
        public Loans()
        {
            PayBacks = new HashSet<PayBacks>();
        }

        public int Id { get; set; }
        public int Loaner { get; set; }
        public int Borrower { get; set; }
        public decimal Amount { get; set; }

        public Person BorrowerNavigation { get; set; }
        public Person LoanerNavigation { get; set; }
        public ICollection<PayBacks> PayBacks { get; set; }
    }
}
