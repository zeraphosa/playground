using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;

namespace proje
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
        }

        MySqlConnection baglanti = new MySqlConnection("Server=localhost; Database=zlines;uid=root;Pwd=;");
        string gzrgh = Form1.guzergahgonder;
        string trh = Form1.tarihgonder;
        private void Form2_Load(object sender, EventArgs e)
        {
            // Secilen tarihte secilen guzergahta olan yolculari gostermek icin
            lblGzrgh.Text = gzrgh;
            lbltrh.Text = trh;
            baglanti.Open();
            MySqlCommand cmd = new MySqlCommand("SELECT * FROM satinalinan WHERE Cinsiyet='Erkek' OR Cinsiyet='Kadin'", baglanti);
            MySqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                if (rdr["Tarih"].ToString() == trh)
                {
                    if (rdr["Guzergah"].ToString() == gzrgh)
                    {
                        if (rdr["Cinsiyet"].ToString() == "Erkek")
                        {
                            ((PictureBox)this.Controls[rdr["KoltukNo"].ToString()]).BackgroundImage = pbErkek.BackgroundImage;
                            ((PictureBox)this.Controls[rdr["KoltukNo"].ToString()]).Enabled = false;
                        }
                        else
                        {
                            ((PictureBox)this.Controls[rdr["KoltukNo"].ToString()]).BackgroundImage = pbKadin.BackgroundImage;
                            ((PictureBox)this.Controls[rdr["KoltukNo"].ToString()]).Enabled = false;
                        }
                    }
                    else continue;
                }
                else continue;
            }
            baglanti.Close();
        }


        string tutar; // form1den cekmek icin
        int toplamtutar; // tek koltukta +5 hesabi icin

        // normal koltuklar icin
        private void TekTikla_Click(object sender, System.EventArgs e) // picturebox`lara tek tiklayip secme
        {
            tutar = Form1.fiyatigonder;

            string resimadi = ((PictureBox)sender).Name;
            string resimtexti = ((PictureBox)sender).Name;
            
            ((PictureBox)this.Controls[resimadi]).BackgroundImage = pbSecili.BackgroundImage;
            lblSecKoltuk.Text = resimtexti; // secilen koltuklari ekleme.
            lblTutar.Text = tutar;
            toplamtutar = Convert.ToInt32(tutar);
        }
        
        
        // tek koltuklar icin
        private void TekTikla5_Click(object sender, System.EventArgs e)
        {
            tutar = Form1.fiyatigonder;

            string resimadi = ((PictureBox)sender).Name;
            string resimtexti = ((PictureBox)sender).Name;

            ((PictureBox)this.Controls[resimadi]).BackgroundImage = pbSecili.BackgroundImage;
            lblSecKoltuk.Text = resimtexti; // secilen koltuklari ekleme.
            lblTutar.Text = tutar + " + 5"; // TEK KOLTUK ICIN +5 UCRET
            toplamtutar = Convert.ToInt32(tutar);
            toplamtutar += 5;
        }
        
        
        // secim kaldirma
        private void CiftTikla_DoubleClick(object sender, System.EventArgs e) // picturebox`lara 2 kez tiklayip secim kaldirma
        {
            string resimadi = ((PictureBox)sender).Name;
            ((PictureBox)this.Controls[resimadi]).BackgroundImage = pbBos.BackgroundImage;
            lblSecKoltuk.Text = String.Empty; // label temizlenir
            lblTutar.Text = String.Empty;
        }
        
        //======================================================================================================================================================
        
        // satin al butonu ve diger forma geri donme
        // https://social.msdn.microsoft.com/Forums/ie/tr-TR/57ace040-ffc1-47cb-90e1-3b6394817f56/gizlediim-formu-nasl-geri-getirebilirim?forum=csharptr
        public Form1 f1; // form1` in aynisini geri cagira bilmek icin
        public static string koltuknogonder; // form1`e veri gonderme
        public static string toplamtutargonder;
        private void btnSatinal_Click(object sender, EventArgs e) // koltuk ve tutari kaydeder satin alma sekmesini acar.
        {
            koltuknogonder = lblSecKoltuk.Text; // form1` e gonderilecek veri
            toplamtutargonder = toplamtutar.ToString(); // form1` e gonderilecek veri

            f1.Show();
            f1.btnOdeme_Click(sender, e); // form1 acildiginda odeme sayfasina yonlendirmek icin
            this.Hide();
        }
    }
}
