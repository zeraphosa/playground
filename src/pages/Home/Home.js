import { useState } from "react";
import Donerler from "../../components/Donerler";
import "./style.css";

export default function Home() {
  const [donerler, setDonerler] = useState([
    {
      id: 0,
      type: "toyuq",
      name: "çörək",
      price: "2.00",
      count: 1,
    },
    {
      id: 1,
      type: "toyuq",
      name: "lavaş",
      price: "2.20",
      count: 3,
    },
    {
      id: 2,
      type: "toyuq",
      name: "Porsion",
      price: "4.50",
      count: 0,
    },
    {
      id: 3,
      type: "toyuq",
      name: "Bastırma",
      price: "2.50",
      count: 0,
    },
    {
      id: 4,
      type: "toyuq",
      name: "Tombili",
      price: "2.50",
      count: 0,
    },
    {
      id: 5,
      type: "toyuq",
      name: "Sezar",
      price: "3.00",
      count: 0,
    },
    {
      id: 6,
      type: "toyuq",
      name: "Pilov üstü",
      price: "5.50",
      count: 0,
    },
    {
      id: 7,
      type: "toyuq",
      name: "My Dönər Roll",
      price: "3.70",
      count: 0,
    },
    {
      id: 8,
      type: "toyuq",
      name: "Pendirli çörək",
      price: "2.50",
      count: 0,
    },
    {
      id: 9,
      type: "toyuq",
      name: "Pendirli lavaş",
      price: "2.70",
      count: 0,
    },
    {
      id: 10,
      type: "toyuq",
      name: "Limuzin çörək",
      price: "3.50",
      count: 0,
    },
    {
      id: 11,
      type: "toyuq",
      name: "Limuzin lavaş",
      price: "3.70",
      count: 0,
    },
    {
      id: 12,
      type: "toyuq",
      name: "Şaurma çörək",
      price: "2.70",
      count: 0,
    },
    {
      id: 13,
      type: "toyuq",
      name: "Şaurma lavaş",
      price: "2.90",
      count: 0,
    },
  



    {
      id: 14,
      type: "et",
      name: "çörək",
      price: "2.50",
      count: 0,
    },
    {
      id: 15,
      type: "et",
      name: "lavaş",
      price: "2.70",
      count: 0,
    },
    {
      id: 16,
      type: "et",
      name: "Porsion",
      price: "5.50",
      count: 0,
    },
    {
      id: 17,
      type: "et",
      name: "Bastırma",
      price: "3.00",
      count: 0,
    },
    {
      id: 18,
      type: "et",
      name: "Tombili",
      price: "3.00",
      count: 0,
    },
    {
      id: 19,
      type: "et",
      name: "Sezar",
      price: "3.50",
      count: 0,
    },
    {
      id: 20,
      type: "et",
      name: "Pilov üstü",
      price: "6.50",
      count: 0,
    },
    {
      id: 21,
      type: "et",
      name: "My Dönər Roll",
      price: "4.70",
      count: 0,
    },
    {
      id: 22,
      type: "et",
      name: "Pendirli çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 23,
      type: "et",
      name: "Pendirli lavaş",
      price: "3.20",
      count: 0,
    },
    {
      id: 24,
      type: "et",
      name: "Limuzin çörək",
      price: "4.50",
      count: 0,
    },
    {
      id: 25,
      type: "et",
      name: "Limuzin lavaş",
      price: "4.70",
      count: 11,
    },
    {
      id: 26,
      type: "et",
      name: "Şaurma çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 27,
      type: "et",
      name: "Şaurma lavaş",
      price: "3.20",
      count: 0,
    },
    {
      id: 28,
      type: "et",
      name: "İskəndər",
      price: "7.90",
      count: 0,
    },
    {
      id: 29,
      type: "et",
      name: "Mix Dönər",
      price: "2.50",
      count: 0,
    },



    {
      id: 30,
      type: "burger",
      name: "Toyuq Burger",
      price: "3.50",
      count: 0,
    },
    {
      id: 31,
      type: "burger",
      name: "Toyuq Cheesburger",
      price: "4.00",
      count: 0,
    },
    {
      id: 32,
      type: "burger",
      name: "Ət Burger",
      price: "4.50",
      count: 0,
    },
    {
      id: 33,
      type: "burger",
      name: "Ət Cheesburger",
      price: "5.00",
      count: 0,
    },

    {
      id: 34,
      type: "sorba",
      name: "Mərci şorbası",
      price: "2.00",
      count: 0,
    },
    {
      id: 35,
      type: "sorba",
      name: "Günün şorbası",
      price: "2.00",
      count: 0,
    },

    {
      id: 36,
      type: "salat",
      name: "Çoban salatı",
      price: "2.90",
      count: 0,
    },
    {
      id: 37,
      type: "salat",
      name: "Sezar salatı",
      price: "6.00",
      count: 0,
    },
    {
      id: 38,
      type: "salat",
      name: "Paytaxt salatı",
      price: "3.00",
      count: 0,
    },
    {
      id: 39,
      type: "cigkofte",
      name: "Çiğ Köftə",
      price: "3.00",
      count: 0,
    },
    {
      id: 40,
      type: "cigkofte",
      name: "Çiğ Köftə servis",
      price: "4.00",
      count: 0,
    },
    {
      id: 41,
      type: "cigkofte",
      name: "Çiğ Köftə dürüm",
      price: "3.50",
      count: 0,
    },
    {
      id: 42,
      type: "kofte",
      name: "Toyuq Köftə çörək",
      price: "2.50",
      count: 0,
    },
    {
      id: 43,
      type: "kofte",
      name: "Toyuq Köftə lavaş",
      price: "2.70",
      count: 0,
    },
    {
      id: 44,
      type: "kofte",
      name: "Toyuq Köftə pendirli çörək",
      price: "3.00",
      count: 0,
    },

    {
      id: 45,
      type: "kofte",
      name: "Toyuq Köftə pendirli lavaş",
      price: "3.20",
      count: 0,
    },
    {
      id: 46,
      type: "kofte",
      name: "Ət Köftə çörək",
      price: "3.00",
      count: 0,
    },
    {
      id: 47,
      type: "kofte",
      name: "Ət Köftə lavaş",
      price: "3.20",
      count: 0,
    },
    {
      id: 48,
      type: "kofte",
      name: "Ət Köftə pendirli çörək",
      price: "3.50",
      count: 0,
    },
    {
      id: 49,
      type: "kofte",
      name: "Ət Köftə pendirli lavaş",
      price: "3.70",
      count: 0,
    },
    {
      id: 50,
      type: "kofte",
      name: "Toyuq Köftə servis",
      price: "5.00",
      count: 0,
    },
    {
      id: 51,
      type: "kofte",
      name: "Toyuq Köftə pendirli servis",
      price: "5.50",
      count: 0,
    },
    {
      id: 52,
      type: "kofte",
      name: "Ət Köftə servis",
      price: "6.50",
      count: 0,
    },
    {
      id: 52,
      type: "kofte",
      name: "Ət Köftə pendirli servis",
      price: "7.00",
      count: 0,
    },
    {
      id: 53,
      type: "tost",
      name: "Sadə tost",
      price: "2.00",
      count: 0,
    },
    {
      id: 54,
      type: "tost",
      name: "Sucuklu pendirli tost",
      price: "3.00",
      count: 0,
    },
    {
      id: 55,
      type: "tost",
      name: "Qarışıq tost",
      price: "3.50",
      count: 0,
    },
    {
      id: 56,
      type: "tost",
      name: "Tost menu",
      price: "5.00",
      count: 0,
    },
    {
      id: 57,
      type: "tost",
      name: "Nugget + fries",
      price: "5.50",
      count: 0,
    },
    {
      id: 58,
      type: "tost",
      name: "Fries",
      price: "2.50",
      count: 0,
    },
    {
      id: 59,
      type: "lunch",
      name: "Şorba, pilav üstü toyuq dönər, ayran",
      price: "5.00",
      count: 0,
    },
    {
      id: 60,
      type: "lunch",
      name: "Şorba, toyuq köftə çörəkdə, ayran",
      price: "4.50",
      count: 0,
    },
    {
      id: 61,
      type: "lunch",
      name: "Şorba, toyuq köftə servis, ayran",
      price: "5.50",
      count: 0,
    },
    {
      id: 62,
      type: "lunch",
      name: "Şorba, ət köftə çörəkdə, ayran",
      price: "5.00",
      count: 0,
    },
    {
      id: 63,
      type: "lunch",
      name: "Şorba, ət köftə servis, ayran",
      price: "6.00",
      count: 0,
    },
    {
      id: 64,
      type: "set",
      name: "Toyuq burger, fries, 0.3ml cola",
      price: "6.00",
      count: 0,
    },
    {
      id: 65,
      type: "set",
      name: "Toyuq cheesburger, fries, 0.3ml cola",
      price: "6.50",
      count: 0,
    },
    {
      id: 66,
      type: "set",
      name: "Ət burger, fries, 0.3ml cola",
      price: "7.00",
      count: 0,
    },
    {
      id: 67,
      type: "set",
      name: "Ət cheesburger, fries, 0.3ml cola",
      price: "7.50",
      count: 0,
    },
    {
      id: 68,
      type: "set",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },



    {
      id: 69,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
    {
      id: 70,
      type: "icki",
      name: "Cola, fanta, sprite 0.3ml",
      price: "0.90",
      count: 0,
    },
    {
      id: 71,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
    {
      id: 72,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
    {
      id: 73,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
    {
      id: 74,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
    {
      id: 75,
      type: "icki",
      name: "Barbekü sos",
      price: "0.50",
      count: 0,
    },
  ]);

  return (
    <div className="home">
      <div className="menu">
        <div className="menu-item">
          <Donerler donerler={donerler} setDonerler={setDonerler} />
        </div>
        <div className="menu-item">Burger, Şorba, Salat, Ciğ köftə</div>
        <div className="menu-item">Köftə</div>
        <div className="menu-item">Tost</div>
        <div className="menu-item">My Burger Set, Business Lunch</div>
        <div className="menu-item">İçkilər</div>
      </div>
      <div className="info">Paket, Çöl, Normal</div>
      <div className="done">Sifarişi tamamla</div>
    </div>
  );
}
