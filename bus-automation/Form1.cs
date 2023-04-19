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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e) // uyari
        {
            cmbNereden.Items.AddRange(iller); // sadece 1 kez eklemesi icin
            cmbNereye.Items.AddRange(iller);
        }
        //======================================================================================================================================================
        MySqlConnection baglanti = new MySqlConnection("Server=localhost; Database=zlines;uid=root;Pwd=;");
        string fiyat = ""; // cmbNereye secildikten sonra veriyi label`a fiyat ile cekme
        public string[] iller = {
                            "Adana", "Ankara",
                            "Antalya", "Aydin",
                            "Artvin","Afyon",
                            "Bursa", "Denizli",
                            "Eskisehir" , "Mersin",
                            "Istanbul", "Izmir",
                            "Konya", "Kutahya",
                            "Malatya", "Manisa",
                            "Mugla", "Mus",
                            "Nevsehir", "Ordu",
                            "Rize", "Samsun",
                            "Trabzon",
        };

        //======================================================================================================================================================
        // combobox islemleri
        private void cmbNereden_SelectedIndexChanged(object sender, EventArgs e)
        {
            //cmbNereye.Items.Remove(cmbNereden.SelectedItem);
            lblG1.Text = cmbNereden.SelectedItem.ToString();
        }
        public static string fiyatigonder;
        private void cmbNereye_SelectedIndexChanged(object sender, EventArgs e)
        {
            lblG2.Text = cmbNereye.SelectedItem.ToString();
            // fiyatlari cekmek icin
            baglanti.Open();
            MySqlCommand cmd = new MySqlCommand("select fiyat from fiyatlar where il = '" + cmbNereye.SelectedItem + "'", baglanti);
            MySqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                fiyat = dr["fiyat"].ToString();
            }
            dr.Close();
            cmd.Dispose();
            baglanti.Close();

            lblF1.Text = fiyat;
            fiyatigonder = fiyat; // form2 ye fiyati gonderme
        }

        //======================================================================================================================================================

        // Guzergah sayfasi
        public static string guzergahgonder; // form2`ye gondermek icin
        public static string tarihgonder;
        private void btnGuzergah_Click(object sender, EventArgs e) // Guzergah butonu
        {
            panelSurukle.Height = btnGuzergah.Height; // panelSurukle tikladigim butonun yanina gelmesini saglar
            panelSurukle.Top = btnGuzergah.Top;

            panelBilgi.Visible = false; // diger panellerin gozukmemesi icin
            panelOdeme.Visible = false;
            panelYonetici.Visible = false;

            panelGuzergah.Location = new Point(211, 51); // gozuken panelin konumunu ve olculerini belirlemek icin
            panelGuzergah.Height = 488;
            panelGuzergah.Width = 341;
            panelGuzergah.Visible = true;
        }
        private void btnilBilgi_Click(object sender, EventArgs e)
        {
            // Yazilari doldurmadan giris yapilmamasi icin
            if (cmbNereden.Text == "" || cmbNereye.Text == "")
            {
                lblUyari1.Visible = true;
                lblUyari2.Visible = true;
                btnBilgi.Enabled = false; // butonun tiklanmasini kapatir
            }
            else
            {
                lblUyari1.Visible = false;
                lblUyari2.Visible = false;
                btnBilgi.Enabled = true; // butonun tiklanmasini acar
                btnBilgi_Click(sender, e); // Guzergah sayfasindaki butonla Bilgi gider.
            }
        }



        // Bilgi sayfasi
        private void btnBilgi_Click(object sender, EventArgs e)
        {
            panelSurukle.Height = btnBilgi.Height; // panelSurukle tikladigim butonun yanina gelmesini saglar
            panelSurukle.Top = btnBilgi.Top;

            panelGuzergah.Visible = false;
            panelOdeme.Visible = false;
            panelYonetici.Visible = false;

            panelBilgi.Location = new Point(211, 51);
            panelBilgi.Height = 488;
            panelBilgi.Width = 341;
            panelBilgi.Visible = true;
        }
        private void btnilKoltuk_Click(object sender, EventArgs e)
        {
            // Yazilari doldurmadan giris yapilmamasi icin
            if(txtbAd.Text == "" || txtbSoyad.Text == "" || txtbTelno.Text == "" || cmbCinsiyet.Text == "")
            {
                lblUyari3.Visible = true;
                lblUyari4.Visible = true;
                lblUyari5.Visible = true;
                lblUyari6.Visible = true;
                btnKoltuk.Enabled = false;
            }
            else
            {
                lblUyari3.Visible = false;
                lblUyari4.Visible = false;
                lblUyari5.Visible = false;
                lblUyari6.Visible = false;
                btnKoltuk.Enabled = true;
                btnKoltuk_Click(sender, e);
            }
        }



        // Koltuk sayfasi
        private void btnKoltuk_Click(object sender, EventArgs e)
        {
            panelSurukle.Height = btnKoltuk.Height; // panelSurukle tikladigim butonun yanina gelmesini saglar
            panelSurukle.Top = btnKoltuk.Top;

            tarihgonder = DTPtarih.Text; // tarihi form2 gonderme
            lblGorunmez.Text = lblG1.Text + lblG2.Text; // guzergahi sqlden cekilen ile esitlemek icin form2`ye gonderme
            guzergahgonder = lblGorunmez.Text;
            Form2 f2 = new Form2();
            f2.f1 = this; // form1` in aynisini geri cagira bilmek icin
            f2.Show();
            MessageBox.Show("Lutfen tek koltuk seciniz.");
        }



        // Odeme sayfasi
        string koltno, ttutar; // Form2den cekilen veriyi atamak icin
        public void btnOdeme_Click(object sender, EventArgs e) // public olmasi - form2den kontrol icin
        {
            panelSurukle.Height = btnOdeme.Height; // panelSurukle tikladigim butonun yanina gelmesini saglar
            panelSurukle.Top = btnOdeme.Top;

            panelGuzergah.Visible = false;
            panelBilgi.Visible = false;
            panelYonetici.Visible = false;

            panelOdeme.Location = new Point(211, 51);
            panelOdeme.Height = 488;
            panelOdeme.Width = 341;
            panelOdeme.Visible = true;

            lblGuzergahOdeme.Text = lblG1.Text + "--" + lblG2.Text; // secilen guzergahi gostermek icin
            koltno = Form2.koltuknogonder; // Form2`den cekilen veri
            ttutar = Form2.toplamtutargonder; // !veritabanina ttutar seklinde eklenebilir , lblTutarOdeme.Text - Eklenmiyor.
            lblKoltuknoOdeme.Text = koltno; // cekilen veriyi labelda gosterme
            lblTutarOdeme.Text = ttutar;
        }
        private void btnAl_Click(object sender, EventArgs e) // Satin al butonu Verileri kaydeder
        {
            // yazilanlari silmek icin
            lblGuzergahOdeme.Text = String.Empty;
            lblKoltuknoOdeme.Text = String.Empty;
            lblTutarOdeme.Text = String.Empty;

            baglanti.Open();
            try
            {
                
                MySqlCommand ekle = new MySqlCommand("insert into satinalinan (Ad,Soyad,Cinsiyet,Telno,Guzergah,KoltukNo,Tarih,Toplamtutar) values ('" + txtbAd.Text + "'," +
                    "'" + txtbSoyad.Text + "'," +
                    "'" + cmbCinsiyet.Text + "','" + txtbTelno.Text + "', '"+ lblG1.Text + lblG2.Text +  "'," +
                    "'" + koltno + "','" + DTPtarih.Text + "','" + ttutar + "')", baglanti); // dtpGuzergah = tarih
                 object sonuc = null;
                sonuc = ekle.ExecuteNonQuery(); // sorgu calisti ve donen deger object turunden degiskene gecti eger degisken bos degilse eklendi bossa eklenmedi
                if (sonuc != null)
                    MessageBox.Show("Sisteme basariyla eklendi", "Bilgi", MessageBoxButtons.OK, MessageBoxIcon.Information);
                else
                    MessageBox.Show("Sisteme eklenemedi.", "Uyari", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                baglanti.Close();
            }
            catch (Exception HataYakala)
            {
                MessageBox.Show("Hata: " + HataYakala.Message, "Hata", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            MessageBox.Show("Satin alma basarili.");
        }



        //Yonetici sayfasi
        private void btnYonetici_Click(object sender, EventArgs e)
        {
            panelBilgi.Visible = false;
            panelOdeme.Visible = false;
            panelGuzergah.Visible = false;

            panelYonetici.Location = new Point(211, 51);
            panelYonetici.Height = 488;
            panelYonetici.Width = 341;
            panelYonetici.Visible = true;
        }
        private void btntGiris_Click(object sender, EventArgs e) // yonetici paneli giris butonu
        {
            if (txtbKullanici.Text == "admin" && txtbSifre.Text == "1234")
            {
                MessageBox.Show("Giris basarili.");
                Form3 f3 = new Form3();
                f3.Show();
                //this.Hide();
            }
            else MessageBox.Show("Giris yapilamadi.");
        }


        //======================================================================================================================================================

        // form islemleri
        private void btnClose_Click(object sender, EventArgs e) // formu kapatma tusu
        {
            this.Close();
            Application.Exit();
        }
        private void btnMinimize_Click(object sender, EventArgs e) // formu simge durumuna kucultme
        {
            this.WindowState = FormWindowState.Minimized;
        }
        // formu hareket ettirmek icin gereken degiskenler https://www.youtube.com/watch?v=MeKxu3X6vlw alintidir.
        bool surukle = false;
        Point startpoint = new Point(0, 0);
        private void panelBaslik_MouseDown(object sender, MouseEventArgs e)
        {
            surukle = true;
            startpoint = new Point(e.X, e.Y);
        }
        private void panelBaslik_MouseMove(object sender, MouseEventArgs e) // formu surukleme icin
        {
            if (surukle)
            {
                Point p = PointToScreen(e.Location);
                this.Location = new Point(p.X - startpoint.X, p.Y - startpoint.Y);
            }
        }
        private void panelBaslik_MouseUp(object sender, MouseEventArgs e)
        {
            surukle = false;
        }

        //======================================================================================================================================================

        // textbox rakam ve harf kontorlu
        // kaynak: https://www.muratyazici.com/c-textboxa-sadece-harf-girme-sadece-sayi-girme.html 
        private void txtbAd_KeyPress(object sender, KeyPressEventArgs e) // harf girisi icin (Ad)
        {
            e.Handled = !char.IsLetter(e.KeyChar) && !char.IsControl(e.KeyChar) && !char.IsSeparator(e.KeyChar);
        }
        private void txtbSoyad_KeyPress(object sender, KeyPressEventArgs e) // harf girisi icin (Soyad)
        {
            e.Handled = !char.IsLetter(e.KeyChar) && !char.IsControl(e.KeyChar) && !char.IsSeparator(e.KeyChar);
        }
        private void txtbTelno_KeyPress(object sender, KeyPressEventArgs e) // rakam girisi icin (Telno)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);
        }
    }
}
