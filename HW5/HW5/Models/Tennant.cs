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
        public string Phone { get; set; }

        [Required]
        public string Apartment { get; set; }

        [Required]
        public int UnitNum { get; set; }

        [Required]
        public string Explain { get; set; }

        public System.DateTime Timestamp
        {
            get
            {
                System.DateTime date = DateTime.Today;
                return date;
            }
        }

        public override string ToString()
        {
            return $"{base.ToString()}: {FirstName} {LastName}";
        }
    }
}
