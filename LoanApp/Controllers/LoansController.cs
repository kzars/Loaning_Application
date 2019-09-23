using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoanApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoanApp.Controllers
{

    public class LoansController : Controller
    {
        LoansDataAccessLayer objloans = new LoansDataAccessLayer();

        [HttpGet]
        [Route("api/Loans/Index")]
        public IEnumerable<Loans> Index()
        {
            return objloans.GetAllLoans();
        }

        [HttpPost]
        [Route("api/Loans/Create")]
        public int Create([FromBody] Loans loans)
        {
            return objloans.AddLoan(loans);
        }

    }
}
