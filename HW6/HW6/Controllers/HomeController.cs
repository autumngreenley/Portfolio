using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using HW6.Models.ViewModels;
using HW6.Models;

namespace HW6.Controllers
{
    public class HomeController : Controller
    {
        private readonly WWIContext db = new WWIContext();
        // GET: Home
        [HttpGet]
        public ActionResult Index()
        {
            string query = Request.QueryString["q"];
            ViewBag.message = query;
            //return View();
            return View(db.People.Where(p => p.FullName.ToLower().Contains(query.ToLower())).ToList());
        }

        public ActionResult Details(int id)
        {
            Person user = db.People.Find(id);
            PersonViewModel vm = new PersonViewModel
            {
                FullName = user.FullName,
                Name = user.PreferredName,
                Phone = user.PhoneNumber,
                Fax = user.FaxNumber,
                Email = user.EmailAddress,
                MemberSince = user.ValidFrom
            };

            

            return View(vm);
        }
    }
}