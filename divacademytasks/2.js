const body = document.getElementById("body");
body.innerHTML = `
    <input type='number' placeholder='num1' id='num1'/>
    <p>+</p>
    <input type='number' placeholder='num2' id='num2'/>
    <button onclick="sum()">=</button>
    <p id='result'></p>
`;

function sum() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");

  result.innerText = +num1.value + +num2.value;
}
