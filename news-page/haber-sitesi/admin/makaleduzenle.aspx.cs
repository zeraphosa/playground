using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using haber_sitesi.DataAccess;

namespace haber_sitesi.admin
{
    public partial class makaleduzenle : System.Web.UI.Page
    {
        sql bgl = new sql();
        string makaleID;
        protected void Page_Load(object sender, EventArgs e)
        {
            makaleID = Request.QueryString["makaleID"];
            if (!Page.IsPostBack)
            {
                SqlCommand cmd = new SqlCommand("select * from makale where makaleID=@m", bgl.sqlbaglanti());
                cmd.Parameters.AddWithValue("m", makaleID);
                SqlDataReader dr = cmd.ExecuteReader();
                while (dr.Read())
                {
                    TxtMakaleEkle.Text = dr[1].ToString();
                    TxtMakaleOzet.Text = dr[2].ToString();
                    TxtMakaleIcerik.Text = dr[3].ToString();
                }

                //kategorileri dropdownliste cekme
                SqlCommand kat = new SqlCommand("select * from kategori", bgl.sqlbaglanti());
                SqlDataReader drkat = kat.ExecuteReader();
                DropDownList1.DataTextField = "kategoriAd";
                DropDownList1.DataValueField = "kategoriID";
                DropDownList1.DataSource = drkat;
                DropDownList1.DataBind();
            }
        }

        protected void BtnMakaleDuzenle_Click(object sender, EventArgs e)
        {
            SqlCommand makaleduzenle = new SqlCommand("update makale set makaleBaslik=@mb, makaleOzet=@mo, makaleDetay=@md, kategoriID=@kat where makaleID=@id", bgl.sqlbaglanti());
            makaleduzenle.Parameters.AddWithValue("mb", TxtMakaleEkle.Text);
            makaleduzenle.Parameters.AddWithValue("mo", TxtMakaleOzet.Text);
            makaleduzenle.Parameters.AddWithValue("md", TxtMakaleIcerik.Text);
            makaleduzenle.Parameters.AddWithValue("kat", DropDownList1.SelectedValue);
            makaleduzenle.Parameters.AddWithValue("id", makaleID);

            makaleduzenle.ExecuteNonQuery();
            Response.Redirect("admin.aspx");
        }
    }
}