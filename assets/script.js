const masinlar = [
  {
    id: 0,
    marka: "BMW",
    model: "X7",
    yanacaq: "Benzin",
    qiymet: "87 000 $",
    motor: "3.0",
    il: "2019",
    reng: "blue",
    probeq: "34 000 km",
    img: "./assets/img/x7.jpg",
  },
  {
    id: 1,
    marka: "Mercedes",
    model: "G 63 AMG",
    yanacaq: "Benzin",
    qiymet: "495 156 AZN",
    motor: "4.0",
    il: "2023",
    reng: "blue",
    probeq: "0 km",
    img: "./assets/img/g63.jpg",
  },
  {
    id: 2,
    marka: "Mercedes",
    model: "G 63 AMG",
    yanacaq: "Benzin",
    qiymet: "495 156 AZN",
    motor: "4.0",
    il: "2023",
    reng: "blue",
    probeq: "0 km",
    img: "./assets/img/g63.jpg",
  },
  {
    id: 3,
    marka: "Mercedes",
    model: "G 63 AMG",
    yanacaq: "Benzin",
    qiymet: "495 156 AZN",
    motor: "4.0",
    il: "2023",
    reng: "blue",
    probeq: "0 km",
    img: "./assets/img/g63.jpg",
  },
];

const main = document.getElementById("main");
let code = "";

for (const item of masinlar) {
  code += `
        <div class="card" onclick="show(${item.id})">
          <img src="${item.img}" alt="masin"/>
           <div class="text">
              <p>${item.qiymet}</p>
              <p>${item.marka} ${item.model}</p>
              <p>${item.il}, ${item.motor}, ${item.probeq}</p>
           </div>
        </div>
    `;
}

main.innerHTML = code;

function show(item) {
  masinlar.filter(
    (i) =>
      i.id === item &&
      (main.innerHTML = `
    <div class="cardetail">
    <img src='${i.img}' alt="masin" />
    <div>
      <p>${i.qiymet}</p>
      <p>${i.marka} ${i.model}</p>
      <p>${i.il}, ${i.motor}, ${i.probeq}</p>
    </div>
  </div>
    `),
  );
}
