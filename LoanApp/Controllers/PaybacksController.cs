using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoanApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoanApp.Controllers
{

    public class PaybacksController : Controller
    {
        PaybacksDataAccessLayer objpaybacks = new PaybacksDataAccessLayer();

        [HttpGet]
        [Route("api/Paybacks/Index")]
        public IEnumerable<PayBacks> Index()
        {
            return objpaybacks.GetAllPaybacks();
        }

        [HttpPost]
        [Route("api/Paybacks/Create")]
        public int Create([FromBody] PayBacks paybacks)
        {
            return objpaybacks.AddPaybacks(paybacks);
        }

    }
}
