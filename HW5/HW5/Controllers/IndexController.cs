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
    }
}