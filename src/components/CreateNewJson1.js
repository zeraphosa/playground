import React from "react";
import data from "./tr_az.json";

export default function CreateNewJson1() {
  const sonuncu_hali = data.flatMap((i) => {
    const a = i.v.map(t => ({
      k: i.k,
      v: t,
    }));
    return a;
  });
  return (
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(sonuncu_hali)
      )}`}
      download="az_tr.json"
    >
      az_tr ilk v indir
    </a>
  );
}