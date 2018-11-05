using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using HW5.Models;

namespace HW5.DAL
{
    public class TennantContext : DbContext
    {
        public TennantContext() : base("name=FirstTry")
        {

        }

        public virtual DbSet<Tennant> Tennants { get; set; }
    }
}