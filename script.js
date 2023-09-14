const search = document.getElementById("search");
const cart = document.getElementById("cart");
const main = document.getElementById("main");
const inps = document.querySelectorAll(".new > input");

const data = [
  {
    id: 0,
    marka: "bmw",
    model: "x7",
  },
  {
    id: 1,
    marka: "mercedes",
    model: "w140",
  },
];
const cartArr = [];

function showData() {
  console.log(data);
  let code = "";
  for (const item of data) {
    code += `
        <div onclick="addToCart(${item.id})">
            <h1>${item.marka}</h1>
            <h2>${item.model}</h2>
        </div>
    `;
  }
  main.innerHTML = code;
}
showData();

function add() {
  data.push({
    id: rand(1, 100),
    marka: inps[0].value,
    model: inps[1].value,
  });
  showData();
}
function showCart() {
  let code = "";
  for (const item of cartArr) {
    code += `
            <div>
                <span>${item.marka}, ${item.model}</span>
            </div>
        `;
  }
  cart.innerHTML = code;
}
showCart();

search.addEventListener("input", () => {
  let code = "";
  for (const item of data) {
    if (item.marka.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()) || item.model.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
      code += `
        <div onclick="addToCart(${item.id})">
            <h1>${item.marka}</h1>
            <h2>${item.model}</h2>
        </div>
        `;
    }
  }
  main.innerHTML = code;
});

function addToCart(i) {
  let item = data.find((item) => item.id === i);
  cartArr.push({
    id: item.id,
    marka: item.marka,
    model: item.model,
  });
  showCart();
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
