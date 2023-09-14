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

function showdata() {
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
}
showdata();

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
  const marka = document.getElementById("marka");
  const model = document.getElementById("model");
  const yanacaq = document.getElementById("yanacaq");
  const qiymet = document.getElementById("qiymet");
  const motor = document.getElementById("motor");
  const il = document.getElementById("il");
  const reng = document.getElementById("reng");
  const probeq = document.getElementById("probeq");
  const image = document.getElementById("image");

  masinlar.push({
    id: masinlar.length + 1,
    marka: marka.value,
    model: model.value,
    yanacaq: yanacaq.value,
    qiymet: qiymet.value,
    motor: motor.value,
    il: il.value,
    reng: reng.value,
    probeq: probeq.value,
    img: image.value,
  });
  showdata();
}
