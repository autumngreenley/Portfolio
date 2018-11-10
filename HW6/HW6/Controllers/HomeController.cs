using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
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
    }
}