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

        [DisplayName("Phone")]
        public string Phone { get; set; }

        [DisplayName("Fax")]
        public string Fax { get; set; }

        [DisplayName("Email")]
        public string Email { get; set; }

        [DisplayName("Member Since")]
        public System.DateTime MemberSince { get; set; }
    }
}