using System;
using System.Collections.Generic;

namespace LoanApp.Models
{
    public partial class Person
    {
        public Person()
        {
            LoansBorrowerNavigation = new HashSet<Loans>();
            LoansLoanerNavigation = new HashSet<Loans>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public ICollection<Loans> LoansBorrowerNavigation { get; set; }
        public ICollection<Loans> LoansLoanerNavigation { get; set; }
    }
}
