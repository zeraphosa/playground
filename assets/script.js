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

function toggle() {
  const navbottom = document.getElementById("navbottom");
  navbottom.classList.toggle("hide");
}

function add() {
  const inputs = document.getElementsByTagName("input");
  let newData = [
    {
      id: null,
      marka: "",
      model: "",
      yanacaq: "",
      qiymet: "",
      motor: "",
      il: "",
      reng: "",
      probeq: "",
      img: "",
    },
  ];

  for (let i = 0; i < inputs.length; i++) {
    newData.push({
      id: i,
      marka: inputs[i].placeholder === "marka" && inputs[i].value,
      model: inputs[i].placeholder === "model" && inputs[i].value,
      yanacaq: inputs[i].placeholder === "yanacaq" && inputs[i].value,
      qiymet: inputs[i].placeholder === "qiymet" && inputs[i].value,
      motor: inputs[i].placeholder === "motor" && inputs[i].value,
      il: inputs[i].placeholder === "il" && inputs[i].value,
      reng: inputs[i].placeholder === "reng" && inputs[i].value,
      probeq: inputs[i].placeholder === "probeq" && inputs[i].value,
      img: inputs[i].placeholder === "img" && inputs[i].value,
    });
  }
  console.log(newData)
  masinlar.push(newData);
}
