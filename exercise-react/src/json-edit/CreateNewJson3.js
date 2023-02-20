import React from "react";
import data from "./tr_az.json";

export default function CreateNewJson3() {
  const result = [];

  data.forEach((d) => {
    const obj = result.find((x) => x.k === d.k);
    if (obj) {
      obj.v = Array.from(new Set([...obj.v, ...d.v]));
      return;
    }

    result.push(d);
  });
  return (
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(result)
      )}`}
      download="traz_son.json"
    >
      tr_az son v indir
    </a>
  );
}
