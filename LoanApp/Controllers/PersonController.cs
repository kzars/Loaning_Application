using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoanApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace LoanApp.Controllers
{

    public class PersonController : Controller
    {
        PersonDataAccessLayer objperson = new PersonDataAccessLayer();

        [HttpGet]
        [Route("api/People/Index")]
        public IEnumerable<Person> Index()
        {
            return objperson.GetAllPeople();
        }

        [HttpPost]
        [Route("api/People/Create")]
        public int Create([FromBody] Person person)
        {
            return objperson.AddPerson(person);
        }

    }
}
