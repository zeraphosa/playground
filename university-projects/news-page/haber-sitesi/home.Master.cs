using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using haber_sitesi.DataAccess;

namespace haber_sitesi
{
    public partial class home : System.Web.UI.MasterPage
    {
        sql bgl = new sql();
        protected void Page_Load(object sender, EventArgs e)
        {
            SqlCommand mak = new SqlCommand("select * from makale", bgl.sqlbaglanti());
            SqlDataReader mdr = mak.ExecuteReader();
            RpMakale.DataSource = mdr;
            RpMakale.DataBind();

            SqlCommand kat = new SqlCommand("select * from kategori", bgl.sqlbaglanti());
            SqlDataReader dr = kat.ExecuteReader();
            RpKategori.DataSource = dr;
            RpKategori.DataBind();



        }
    }
}