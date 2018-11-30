using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HW8.DAL;
using HW8.Models;

namespace HW8.Controllers
{
    public class HomeController : Controller
    {
        private AuctionContext db = new AuctionContext();
        // GET: Home
        public ActionResult Index()
        {
            var NewBids = db.Bids.OrderByDescending(x=>x.Timestamp).Take(10).ToList();
            return View(NewBids);
        }
    }
}