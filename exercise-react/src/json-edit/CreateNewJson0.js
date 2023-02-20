import React from "react";
import data from "./Turaz.json";

export default function CreateNewJson0() {
  const sira = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const ikinci_hali = data.map((item) => ({
    k: item.turkce,
    v: sira.map((i) => item["azerice_anlami_" + i]).filter(Boolean),
  }));

  return (
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(ikinci_hali)
      )}`}
      download="tr_az.json"
    >
      tr_az indir
    </a>
  );
}
