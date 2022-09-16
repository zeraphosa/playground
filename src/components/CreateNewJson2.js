import React from "react";
import data from "./az_tr.json";

export default function CreateNewJson2() {
  const hash = Object.create(null);
  const result = data.reduce(function (r, a) {
    if (!hash[a.v]) {
      hash[a.v] = { v: a.v, k: [] };
      r.push(hash[a.v]);
    }
    hash[a.v].k.push(a.k);
    return r;
  }, []);

  return (
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(result)
      )}`}
      download="aztr_son.json"
    >
      az_tr son v indir
    </a>
  );
}
