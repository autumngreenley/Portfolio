using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using HW5.Models;
using HW5.DAL;
using System.Web.Mvc;
using System.Web.Routing;

namespace HW5.Controllers
{
    public class IndexController : Controller
    {
        private TennantContext database = new TennantContext();

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult DisplayList()
        {
            return View(database.Tennants.ToList());
        }
        
        public ActionResult RequestForm(string FirstName, string LastName, string Phone, string Apartment, int? UnitNum, string Explain, bool? Permission, DateTime? Timestamps)
        {
            
            if (FirstName == null || LastName == null || Phone == null || Apartment == null || Explain == null )
            {
                ViewBag.Blank = true;
            }
            else
            {
                ViewBag.Blank = false;
            }

            if (ViewBag.Blank == false)
            {
                Tennant NewTennant = new Tennant();
                NewTennant.FirstName = FirstName;
                NewTennant.LastName = LastName;
                NewTennant.Phone = Phone;
                NewTennant.Apartment = Apartment;
                NewTennant.UnitNum = UnitNum ?? default(int);
                NewTennant.Explain = Explain;
                NewTennant.Permission = Convert.ToInt32(Permission ?? default(bool));
                NewTennant.Timestamps = DateTime.Now;

                ViewBag.NewTennant = NewTennant;
                database.Tennants.Add(NewTennant);
                database.SaveChanges();

                return RedirectToAction("DisplayList");
            }

            return View();
        }
    }
}