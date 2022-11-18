using Dapper.Contrib.Extensions;

namespace UpmeetCapstoneAPI.Models
{
    [Table("events")]
    public class Event
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string location { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public string category { get; set; }
        public bool favorite { get; set; }
    }
}
