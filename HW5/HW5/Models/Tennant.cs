using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

/*
string firstname
string lastname
string phone
string apartment
int unitnum
string explain
*/

namespace HW5.Models
{
    public class Tennant
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [StringLength(20)]
        public string FirstName { get; set; }

        [Required, StringLength(20)]
        public string LastName { get; set; }

        [Required]
        public string phone { get; set; }

        [Required]
        public string apartment { get; set; }

        [Required]
        public int unitnum { get; set; }

        [Required]
        public string explain { get; set; }

        public int timestamp
        {
            get
            {
                var date = DateTime.Today;
                return date;
            }
        }

        /*public override string ToString()
        {
            return $"{base.ToString()}: {FirstName} {LastName} DOB = {DOB} Age = {Age}";
        }*/
    }
}
