using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using HW8.Models;
using HW8.DAL;

namespace HW8.Controllers
{
    public class ItemController : Controller
    {

        private AuctionContext database = new AuctionContext();

        // GET: Item
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create(string Name, string Description, string Seller)
        {
            if (Name == null || Description == null || Seller == null)
            {
                ViewBag.Blank = true;
            }
            else
            {
                ViewBag.Blank = false;
            }

            if (ViewBag.Blank == false)
            {
                
                Item NewItem = new Item();
                NewItem.SellerID = 0;
                NewItem.Description = Description;
                NewItem.Name = Name;
                //Item.Timestamp = DateTime.Now;

                ViewBag.NewItem = NewItem;
                database.Items.Add(NewItem);
                database.SaveChanges();

                return RedirectToAction("DisplayList");
            }
            return View();
        }
    }
}