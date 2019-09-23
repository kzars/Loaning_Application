using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanApp.Models
{
    public class PersonDataAccessLayer
    {
        tilde_demoContext db = new tilde_demoContext();

        public IEnumerable<Person> GetAllPeople()
        {
            try
            {
                return db.Person.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To add new person's record   
        public int AddPerson(Person person)
        {
            try
            {
                db.Person.Add(person);
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
