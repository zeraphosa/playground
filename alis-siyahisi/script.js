const data = [
  {
    name: "cola",
    count: 3,
    isBought: false,
  },
  {
    name: "pendir",
    count: 1,
    isBought: false,
  },
  {
    name: "picennik",
    count: 2,
    isBought: false,
  },
  {
    name: "meyve",
    count: 4,
    isBought: false,
  },
  {
    name: "toyuq",
    count: 2,
    isBought: false,
  },
];

updateShopList();
function updateShopList() {
  const shopList = document.getElementById("shopList");
  let code = "";
  data.forEach((item, index) => {
    code += `<p onclick="select(${index})">${item.name}: x${item.count} - ${item.isBought ? "alinib" : "alinmayib"}</p>`;
  });
  shopList.innerHTML = code;
}
let newArr = [];
function select(index) {
  let item = data[index];
  if (item.count === 1) {
    data.splice(index, 1);
  } else {
    item.count -= 1;
  }
  newArr.push({
    name: item.name,
    count: item.count,
    isBought: item.isBought,
  });
  newArr.forEach((el, id) => {
    if (el.name === item.name) {
      newArr.push({
        name: item.name,
        count: item.count++,
        isBought: true,
      });
      newArr.splice(id, 1);
    }
  });
  updateShopList();
}
