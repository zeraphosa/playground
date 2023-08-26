const body = document.getElementById("body");
body.innerHTML = `
    <input type='number' placeholder='num1' id='num1'/>
    <input type='number' placeholder='num2' id='num2'/>
    <button onclick="multiply()">multiply</button>
    <button onclick="divide()">divide</button>
    <p id="result"></p>
`;

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function multiply() {
  result.innerText = num1.value * num2.value;
}

function divide() {
  result.innerText = num1.value / num2.value;
}
