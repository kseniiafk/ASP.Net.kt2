using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using aspNet_kt2.Services;

namespace aspNet_kt2.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public string TextContent { get; set; }

        public void OnGet()
        {
            TextContent = TextFileStorage.LoadText();
        }

        public IActionResult OnPost()
        {
            if (!string.IsNullOrEmpty(TextContent))
            {
                TextFileStorage.SaveText(TextContent);
            }
            return RedirectToPage();
        }
    }
}