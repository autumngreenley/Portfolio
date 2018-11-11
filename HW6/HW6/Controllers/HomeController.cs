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
            return View(db.People.Where(p => p.FullName.ToLower().Contains(query.ToLower())).ToList());
        }

        public ActionResult Details(int id)
        {
            ViewBag.showmore = false;

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

            if (user.Customers2.Count()>0)
            {
                ViewBag.showmore = true;
                int customerID = user.Customers2.FirstOrDefault().CustomerID;
                Customer customer = db.Customers.Find(customerID);

                vm.CompanyName = customer.CustomerName;
                vm.CompanyPhone = customer.PhoneNumber;
                vm.CompanyFax = customer.FaxNumber;
                vm.CompanyWebsite = customer.WebsiteURL;
                vm.CompanyMemberSince = customer.ValidFrom;

                //Orders
                vm.Orders = (customer.Orders.ToList()).Count;
                vm.GrossSales = customer.Orders.SelectMany(x => x.Invoices).SelectMany(x => x.InvoiceLines).Sum(x => x.ExtendedPrice);
                vm.GrossProfit = customer.Orders.SelectMany(x => x.Invoices).SelectMany(x => x.InvoiceLines).Sum(x => x.LineProfit);

                //Invoices
                vm.TopTen=customer.Orders.SelectMany(x => x.Invoices).SelectMany(x => x.InvoiceLines).OrderByDescending(z => z.LineProfit).Take(10).ToList();
            }

            return View(vm);
        }
    }
}