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
    public partial class admin : System.Web.UI.Page
    {
        sql bgl = new sql();

        string kategoriID;
        string veri;
        string makaleID;
        string silme;
        protected void Page_Load(object sender, EventArgs e)
        {
            // kategori getirme
            SqlCommand cmdkatgetir = new SqlCommand("select * from kategori", bgl.sqlbaglanti());
            SqlDataReader drkatgetir = cmdkatgetir.ExecuteReader();
            RpKatgetir.DataSource = drkatgetir;
            RpKatgetir.DataBind();

            //kategori silme
            kategoriID = Request.QueryString["kategoriID"];
            veri = Request.QueryString["veri"];

            if(veri == "sil")
            {
                SqlCommand cmdkatsil = new SqlCommand("delete from kategori where kategoriID=@p", bgl.sqlbaglanti());
                cmdkatsil.Parameters.AddWithValue("p", kategoriID);
                cmdkatsil.ExecuteNonQuery();
                Response.Redirect("admin.aspx");
            }

            //kategorileri dropdownliste cekme
            SqlCommand kat = new SqlCommand("select * from kategori", bgl.sqlbaglanti());
            SqlDataReader drkat = kat.ExecuteReader();
            DropDownList1.DataTextField = "kategoriAd";
            DropDownList1.DataValueField = "kategoriID";
            DropDownList1.DataSource = drkat;
            DropDownList1.DataBind();

            //makale silme
            makaleID = Request.QueryString["makaleID"];
            silme = Request.QueryString["silme"];

            if (silme=="sil")
            {
                SqlCommand makalesil = new SqlCommand("delete from makale where makaleID=@ma", bgl.sqlbaglanti());
                makalesil.Parameters.AddWithValue("ma", makaleID);
                makalesil.ExecuteNonQuery();
                Response.Redirect("admin.aspx");
            }


            //makaleleri getirme
            SqlCommand makalegetir = new SqlCommand("select * from makale", bgl.sqlbaglanti());
            SqlDataReader drmakale = makalegetir.ExecuteReader();
            RpMakaleCek.DataSource = drmakale;
            RpMakaleCek.DataBind();


            PnlKekle.Visible = false;
            PnlKduzenle.Visible = false;
            PnlMakaleEkle.Visible = false;
            PnlMakaleDuzenle.Visible = false;
        }

        protected void BtnKekleAc_Click(object sender, EventArgs e)
        {
            PnlKekle.Visible = true;
        }

        protected void BtnKekleKapat_Click(object sender, EventArgs e)
        {
            PnlKekle.Visible = false;
        }

        protected void BtnKduzenleAc_Click(object sender, EventArgs e)
        {
            PnlKduzenle.Visible = true;
        }

        protected void BtnKduzenleKapat_Click(object sender, EventArgs e)
        {
            PnlKduzenle.Visible = false;
        }

        protected void BtnMakaleEkleAc_Click(object sender, EventArgs e)
        {
            PnlMakaleEkle.Visible = true;
        }

        protected void BtnMakaleEkleKapat_Click(object sender, EventArgs e)
        {
            PnlMakaleEkle.Visible = false;
        }

        protected void BtnMakaleDuzenleAc_Click(object sender, EventArgs e)
        {
            PnlMakaleDuzenle.Visible = true;
        }

        protected void BtnMakaleDuzenleKapat_Click(object sender, EventArgs e)
        {
            PnlMakaleDuzenle.Visible = false;
        }

        protected void BtnKekle_Click(object sender, EventArgs e)
        {
            SqlCommand cmdkatekle = new SqlCommand("Insert into kategori(kategoriAd) values(@p)", bgl.sqlbaglanti());
            cmdkatekle.Parameters.AddWithValue("p", TxtKekle.Text);
            cmdkatekle.ExecuteNonQuery();
        }

        protected void BtnMakaleEkle_Click(object sender, EventArgs e)
        {
            SqlCommand makaleekle = new SqlCommand("insert into makale(makaleBaslik, makaleOzet, makaleDetay, kategoriID) values(@mb,@mo,@md,@kat)", bgl.sqlbaglanti());
            makaleekle.Parameters.AddWithValue("mb", TxtMakaleEkle.Text);
            makaleekle.Parameters.AddWithValue("mo", TxtMakaleOzet.Text);
            makaleekle.Parameters.AddWithValue("md", TxtMakaleIcerik.Text);
            makaleekle.Parameters.AddWithValue("kat", DropDownList1.SelectedValue);
            makaleekle.ExecuteNonQuery();
            Response.Redirect("admin.aspx");
        }
    }
}