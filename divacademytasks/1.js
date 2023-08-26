const body = document.getElementById("body");
// body.innerHTML = `
    // <input type="text" placeholder="name1" id="input1"/>
    // <button onclick="switchNames()"><=></button>
    // <input type="text" placeholder="name2" id="input2"/>
// `;

function switchNames() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  let firstname = input1.value;
  input1.value = input2.value;
  input2.value = firstname;
}
