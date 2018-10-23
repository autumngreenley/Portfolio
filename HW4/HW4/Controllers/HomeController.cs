using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HW4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        //POST
        public ActionResult ColorChooser()
        {
            return View();
        }

        ///GET
        [HttpGet]
        public ActionResult MileToMetric()
        {
            double conversion = 0.0;
            string givenunit = Request.QueryString["unit"];
            double givenmiles = Convert.ToDouble(Request.QueryString["miles"]);
            if(givenunit!=null && givenmiles!=null)
            { 
                if(givenunit=="mm")
                {
                    conversion = givenmiles * 1609340;
                }
                if(givenunit=="cm")
                {
                    conversion = givenmiles * 160934;
                }
                if(givenunit=="m")
                {
                    conversion = givenmiles * 1609.34;
                }
                if(givenunit=="km")
                {
                    conversion = givenmiles * 1.60934;
                }
                ViewBag.message = givenmiles + " miles is equal to " + conversion + " " + givenunit;
            }
            return View();
        }
    }
}