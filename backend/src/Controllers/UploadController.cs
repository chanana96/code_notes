using Microsoft.AspNetCore.Mvc;
using System;

namespace src.Controllers
{
    [ApiController]
    [Route("Upload")]
    public class UploadController : ControllerBase
    {
        



        [HttpPost("Snippet")]
        public IActionResult Post([FromBody] RequestBody body)
        {
            Console.WriteLine(body.Text);
            return Ok();
            
        }
    }
}
