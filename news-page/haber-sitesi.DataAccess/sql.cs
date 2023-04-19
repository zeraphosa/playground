using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace haber_sitesi.DataAccess
{
    public class sql
    {
        public SqlConnection sqlbaglanti()
        {
            SqlConnection baglan = new SqlConnection("Data Source=DESKTOP-HOGSFFG; Initial Catalog=haberDB; Integrated Security=True");
            baglan.Open();
            SqlConnection.ClearPool(baglan);
            SqlConnection.ClearAllPools();
            return (baglan);
        }
    }
}
