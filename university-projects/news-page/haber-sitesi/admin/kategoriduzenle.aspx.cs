using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using haber_sitesi.DataAccess;
using haber_sitesi.admin;

namespace haber_sitesi.admin
{
    public partial class kategoriduzenle : System.Web.UI.Page
    {
        sql bgl = new sql();
        string kategoriID;
        protected void Page_Load(object sender, EventArgs e)
        {
            kategoriID = Request.QueryString["kategoriID"];

            if (!Page.IsPostBack)
            {
                SqlCommand cmdkattasi = new SqlCommand("select * from kategori where kategoriID=@p", bgl.sqlbaglanti());
                cmdkattasi.Parameters.AddWithValue("p", kategoriID);
                SqlDataReader drkattasi = cmdkattasi.ExecuteReader();
                while (drkattasi.Read())
                {
                    TxtKekle.Text = drkattasi[1].ToString();
                }
            }

        }

        protected void BtnKekle_Click(object sender, EventArgs e)
        {
            SqlCommand cmdkatduzenle = new SqlCommand("update kategori set kategoriAd=@p1 where kategoriID=@id", bgl.sqlbaglanti());
            cmdkatduzenle.Parameters.AddWithValue("id", kategoriID);
            cmdkatduzenle.Parameters.AddWithValue("p1", TxtKekle.Text);
            cmdkatduzenle.ExecuteNonQuery();
            Response.Redirect("admin.aspx");
            bgl.sqlbaglanti().Close();
        }
    }
}