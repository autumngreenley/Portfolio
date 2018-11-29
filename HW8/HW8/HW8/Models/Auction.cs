using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HW8.Models
{
    public class Buyer
    {
        [Key]
        public int ID { get; set; }

        [Required, StringLength(100)]
        [Display(Name = "Buyer Name")]
        public string Name { get; set; }
    }
    
    public class Seller
    {
        [Key]
        public int ID { get; set; }

        [Required, StringLength(100)]
        [Display(Name = "Seller Name")]
        public string Name { get; set; }
    }
    
    public class Item
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Display(Name = "Seller")]
        public int SellerID { get; set; }
        
        [Required, StringLength(500)]
        [Display(Name = "Item Description")]
        public string Description { get; set; }
        
        [Required, StringLength(50)]
        [Display(Name = "Item Name")]
        public string Name { get; set; }
    }
    
    public class Bid
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [Display(Name = "Buyer")]
        public int BuyerID { get; set; }
        
        [Required]
        [Display(Name = "Item")]
        public int ItemID { get; set; }
        
        [Required]
        [Display(Name = "Bid Time")]
        public System.DateTime Timestamp { get; set; }
        
        [Required]
        [Display(Name = "Price")]
        public float Price { get; set; }
    }
}