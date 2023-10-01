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

const content = document.getElementById("content");

showData();
function showData() {
  let code = "";
  for (const item of data) {
    code += `<button onclick="select(this)">${item.name} ${item.count} eded ${item.isBought ? `<span style="color: green">alinib</span>` : `<span style="color: red">alinmayib</span>`}</button>`;
  }
  content.innerHTML = code;
}

function select(button) {
  const item = data[Array.from(button.parentNode.children).indexOf(button)]
  console.log(item)
  if(item.count === 1) {
    data.splice(item, 1);
    showData()
  }
  const newItem = {
    name: item.name,
    count: item.count -= 1,
    isBought: true
  }
  data.push(newItem)
  showData()
}
