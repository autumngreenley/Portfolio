using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HW5.Models
{
    public class Tennant
    {
        [Key]
        public int ID { get; set; }

        [Required, StringLength(20)]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Required, StringLength(20)]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Phone Number")]
        public string Phone { get; set; }

        [Required]
        [Display(Name = "Apartment Name")]
        public string Apartment { get; set; }

        [Required]
        [Display(Name = "Unit Number")]
        public int UnitNum { get; set; }

        [Required]
        [Display(Name = "Their Problem")]
        public string Explain { get; set; }

        [Required]
        [Display(Name = "Permission to Enter Apartment")]
        public int Permission { get; set; }

        [Required]
        [Display(Name ="Time Submitted")]
        public System.DateTime Timestamps { get;  set; }
    }
}