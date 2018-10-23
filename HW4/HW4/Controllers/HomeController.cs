using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Drawing;

namespace HW4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ColorChooser(string firstcolor, string secondcolor)
        {
            Color first = Color.FromArgb(328839);
            return View();
        }

        public ActionResult MileToMetric()
        {
            return View();
        }
    }
}