function Capitalize(value) {
  const splited = value.split(" ");
  const resArr = [];
  let resStr = "";
  for (let i = 0; i <= splited.length - 1; i++) {
    let item = splited[i].replace(splited[i][0], splited[i][0].toUpperCase());
    resArr.push(item);
  }
  resStr = resArr.reduce((a, b) => a.concat(",", b));
  return console.log(resStr);
}

Capitalize("simple text");