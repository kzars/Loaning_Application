using System;
using System.Collections.Generic;

namespace LoanApp.Models
{
    public partial class PayBacks
    {
        public int Id { get; set; }
        public int LoanId { get; set; }
        public decimal Amount { get; set; }

        public Loans Loan { get; set; }
    }
}
