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
    public partial class Form3 : Form
    {
        public Form3()
        {
            InitializeComponent();
        }


        MySqlConnection baglanti = new MySqlConnection("Server=localhost; Database = zlines; Uid=root;");
        MySqlCommand cmd;
        private CurrencyManager mcm;

        private void Form3_Load(object sender, EventArgs e)
        {
            try
            {
                MySqlConnection baglanti = new MySqlConnection("Server=localhost; Database= zlines; Uid=root");
                MySqlDataAdapter adapter = new MySqlDataAdapter("Select * From satinalinan", baglanti);
                baglanti.Open();
                MessageBox.Show("Baglanti Kuruldu.");

                DataSet veriseti = new DataSet();
                DataTable table;

                adapter.Fill(veriseti, "satinalinan");
                table = veriseti.Tables["satinalinan"];

                dataGridView1.DataSource = veriseti.Tables["satinalinan"];
                txtbId.DataBindings.Add("text", table, "id");
                txtbAd.DataBindings.Add("text", table, "Ad");
                txtbSoyad.DataBindings.Add("text", table, "Soyad");
                txtbCinsiyet.DataBindings.Add("text", table, "Cinsiyet");
                txtbTelno.DataBindings.Add("text", table, "Telno");
                txtbGuzergah.DataBindings.Add("text", table, "Guzergah");
                txtbKoltukno.DataBindings.Add("text", table, "KoltukNo");
                txtbTarih.DataBindings.Add("text", table, "Tarih");
                txtbTutar.DataBindings.Add("text", table, "Toplamtutar");

                mcm = (CurrencyManager)
                    this.BindingContext[table];

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void openCon()
        {
            if (baglanti.State == ConnectionState.Closed)
            {
                baglanti.Open();
            }
        }
        public void closeCon()
        {
            if (baglanti.State == ConnectionState.Open)
            {
                baglanti.Close();
            }
        }

        public void QueryCalistir(string query)
        {
            try
            {
                openCon();
                cmd = new MySqlCommand(query, baglanti);
                if (cmd.ExecuteNonQuery() == 1)
                {
                    MessageBox.Show("Query calisti..");
                }
                else
                {
                    MessageBox.Show("Query calismadi!!!");
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                closeCon();
            }
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            string query = "insert into zlines.satinalinan (id,Ad,Soyad,Cinsiyet,Telno,Guzergah,KoltukNo,Tarih,Toplamtutar) values('" + txtbId.Text + "', '" + txtbAd.Text + "', '" + txtbSoyad.Text + "'," +
                "'" + txtbCinsiyet.Text + "','" + txtbTelno.Text + "', '" + txtbGuzergah.Text + "','" + txtbKoltukno.Text + "','" + txtbTarih.Text + "','" + txtbTutar.Text + "')";
            QueryCalistir(query);
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            string query = "delete from zlines.satinalinan where id= " + txtbId.Text;
            QueryCalistir(query);
            txtbId.Text = "";
            txtbAd.Text = "";
            txtbSoyad.Text = "";
            txtbCinsiyet.Text = "";
            txtbTelno.Text = "";
            txtbGuzergah.Text = "";
            txtbKoltukno.Text = "";
            txtbTarih.Text = "";
            txtbTutar.Text = "";
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            string query = "update zlines.satinalinan set id = '" + txtbId.Text + "', Ad =  '" + txtbAd.Text + "', Soyad = " + txtbSoyad.Text + "'," +
                " Cinsiyet = " + txtbCinsiyet.Text + "', Telno = " + txtbTelno.Text + "', Guzergah = " + txtbGuzergah.Text + "', " +
                "KoltukNo =  '" + txtbKoltukno.Text + "', Tarih =  '" + txtbTarih.Text + "', Toplamtutar =  '" + txtbTutar.Text + "' where id= " + txtbId.Text;
            QueryCalistir(query);
        }

        private void btnSelect_Click(object sender, EventArgs e)
        {
            try
            {

                MySqlConnection baglanti = new MySqlConnection("Server=localhost; Database=zlines; Uid=root;");
                MySqlDataAdapter adapter = new MySqlDataAdapter("select * from satinalinan where id=" + txtbId.Text, baglanti);

                baglanti.Open();

                MessageBox.Show("bağlanti basarili bir şekilde oluşturuldu.");

                DataSet veriseti = new DataSet();
                adapter.Fill(veriseti, "id");

                dataGridView1.DataSource = veriseti.Tables["id"];
                txtbId.Text = dataGridView1[0, 0].Value.ToString();
                txtbAd.Text = dataGridView1[1, 0].Value.ToString();
                txtbSoyad.Text = dataGridView1[2, 0].Value.ToString();
                txtbCinsiyet.Text = dataGridView1[3, 0].Value.ToString();
                txtbTelno.Text = dataGridView1[4, 0].Value.ToString();
                txtbGuzergah.Text = dataGridView1[5, 0].Value.ToString();
                txtbKoltukno.Text = dataGridView1[6, 0].Value.ToString();
                txtbTarih.Text = dataGridView1[7, 0].Value.ToString();
                txtbTutar.Text = dataGridView1[8, 0].Value.ToString();
                baglanti.Close();

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnIlk_Click(object sender, EventArgs e)
        {
            mcm.Position = 0;
        }

        private void btnGeri_Click(object sender, EventArgs e)
        {
            if (mcm.Position == 0) MessageBox.Show("Şu an zaten ilk kayıttasınız");
            else mcm.Position -= 1;
        }

        private void btnIleri_Click(object sender, EventArgs e)
        {
            if (mcm.Position == mcm.Count - 1) MessageBox.Show("Şu an zaten son kayıttasınız");
            else mcm.Position += 1;
        }

        private void btnSon_Click(object sender, EventArgs e)
        {
            mcm.Position = mcm.Count - 1;
        }

    }
}
