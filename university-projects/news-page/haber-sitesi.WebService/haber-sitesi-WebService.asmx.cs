using haber_sitesi.DataAccess;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace haber_sitesi.WebService
{
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    public class haber_sitesi_WebService : System.Web.Services.WebService
    {
        sql bgl = new sql();

        [WebMethod]
        public List<haber_sitesi.WebService.haberler> haberler()
        {
            SqlCommand makalegetir = new SqlCommand("select * from makale", bgl.sqlbaglanti());
            SqlDataReader drmakale = makalegetir.ExecuteReader();

            List<haber_sitesi.WebService.haberler> resultList = new List<haber_sitesi.WebService.haberler>();
            while (drmakale.Read())
            {
                haber_sitesi.WebService.haberler haber = new haber_sitesi.WebService.haberler();
                haber.makaleBaslik = drmakale["makaleBaslik"].ToString();
                haber.makaleOzet = drmakale["makaleOzet"].ToString();
                haber.makaleDetay = drmakale["makaleDetay"].ToString();
                resultList.Add(haber);
            }

            return resultList;



        }
    }
}
