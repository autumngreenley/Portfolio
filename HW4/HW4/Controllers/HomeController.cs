using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Drawing;

namespace HW4.Controllers
{
    public class HomeController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Takes two strings (that are ideally hex color values) and returns a third color
        /// </summary>
        /// <param name="firstcolor">The first user entered color</param>
        /// <param name="secondcolor">The second user entered color</param>
        /// <returns>A third color and the view</returns>
        public ActionResult ColorChooser(string firstcolor, string secondcolor)
        {

            if (firstcolor == null && secondcolor == null)
            {
                ViewBag.blank = true;
                ViewBag.incorrect = false;
            }
            else
            {
                // Checks for some basic ways that the entered value may be invalid
                ViewBag.incorrect = false;
                try
                {
                    // The most obvious is to check if the color converts evenly to an actual color
                    Color test1 = ColorTranslator.FromHtml(firstcolor);
                    Color test2 = ColorTranslator.FromHtml(secondcolor);
                }
                catch
                {
                    ViewBag.incorrect = true;
                    ViewBag.blank = true;
                }
                // Sometimes, something can be a valid color (less than six ints and doesn't start with a #) but we still don't want it
                if(firstcolor.Length!=7 || secondcolor.Length!=7 || secondcolor[0]!='#')
                {
                    ViewBag.incorrect = true;
                    ViewBag.blank = true;
                }
                
            }
            
            if(ViewBag.incorrect==false)
            { 
                Color first = Color.FromName("Black");
                Color second = Color.FromName("Black");
                Color third = Color.FromName("Black");
            

                //Yeah, this is probably stupid.
                int firstred = 0;
                int firstgreen = 0;
                int firstblue = 0;
                int secondred = 0;
                int secondgreen = 0;
                int secondblue = 0;
                int thirdred = 0;
                int thirdgreen = 0;
                int thirdblue = 0;

                string firsthex = ColorTranslator.ToHtml(first);
                string secondhex = ColorTranslator.ToHtml(second);
                string thirdhex = ColorTranslator.ToHtml(first);

                if (firstcolor!=null)
                {
                    firstred = Convert.ToInt32(firstcolor.Substring(1, 2), 16);
                    firstgreen = Convert.ToInt32(firstcolor.Substring(3, 2), 16);
                    firstblue = Convert.ToInt32(firstcolor.Substring(5, 2), 16);
                    first = Color.FromArgb(firstred,firstgreen,firstblue);
                    firsthex = ColorTranslator.ToHtml(first);

                }
                if (secondcolor!=null)
                {
                    secondred = Convert.ToInt32(secondcolor.Substring(1, 2), 16);
                    secondgreen = Convert.ToInt32(secondcolor.Substring(3, 2), 16);
                    secondblue = Convert.ToInt32(secondcolor.Substring(5, 2), 16);
                    second = Color.FromArgb(secondred, secondgreen, secondblue);
                    secondhex = ColorTranslator.ToHtml(second);
                }

                thirdred = firstred + secondred;
                thirdgreen = firstgreen + secondgreen;
                thirdblue = firstblue + secondblue;

                //Since hex values for color cap out at 255, gotta make sure nothing's overflowing
                if(thirdred>255)
                {
                    thirdred = 255;
                }
                if(thirdgreen>255)
                {
                    thirdgreen = 255;
                }
                if(thirdblue>255)
                {
                    thirdblue = 255;
                }

                third = Color.FromArgb(thirdred, thirdgreen, thirdblue);
                thirdhex = ColorTranslator.ToHtml(third);

                ViewBag.firstcolor = firsthex;
                ViewBag.secondcolor = secondhex;
                ViewBag.newcolor = thirdhex;
            }
            return View();
        }

        public ActionResult MileToMetric()
        {
            return View();
        }
    }
}