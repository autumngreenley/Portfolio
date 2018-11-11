using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace HW6.Models.ViewModels
{
    public class PersonViewModel
    {
        [DisplayName("Full Name")]
        public string FullName { get; set; }

        [DisplayName("Preferred Name")]
        public string Name { get; set; }

        [Phone, DisplayName("Phone")]
        public string Phone { get; set; }

        [DisplayName("Fax")]
        public string Fax { get; set; }

        [DisplayName("Email")]
        public string Email { get; set; }

        [DisplayName("Member Since")]
        public System.DateTime MemberSince { get; set; }

        //Detailed info

        [DisplayName("Company Name")]
        public string CompanyName { get; set; }

        [Phone, DisplayName("Phone")]
        public string CompanyPhone { get; set; }

        [DisplayName("Fax")]
        public string CompanyFax { get; set; }

        [DisplayName("Website")]
        public string CompanyWebsite { get; set; }

        [DisplayName("Member Since")]
        public System.DateTime CompanyMemberSince { get; set; }

        //Purchase History

        [DisplayName("Orders")]
        public int Orders { get; set; }

        [DisplayName("Gross Sales")]
        
        public decimal GrossSales { get; set; }

        [DisplayName("Gross Profit")]
        public decimal GrossProfit { get; set; }

        [DisplayName("Invoices")]
        public List<InvoiceLine> TopTen { get; set; }
    }
}