const body = document.getElementById("body");
body.innerHTML = `
    <input type="number" placeholder="a" id="a"/>
    <input type="number" placeholder="b" id="b"/>
    <button onclick="find()">Find</button>
    <p id="resultPerimeter"></p>
    <p id="resultArea"></p>
`;

const a = document.getElementById("a");
const b = document.getElementById("b");
const resultPerimeter = document.getElementById("resultPerimeter");
const resultArea = document.getElementById("resultArea");

function find() {
  resultPerimeter.innerText = `Perimeter: ` + 2 * (+a.value + +b.value);
  resultArea.innerText = `Area: ` + a.value * b.value;
}
