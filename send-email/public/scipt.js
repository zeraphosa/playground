let form = document.getElementById("mailform");
let name = document.getElementById("cl_name");
let email = document.getElementById("cl_email");
let text = document.getElementById("cl_text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    text: text.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email sent");
      (name.value = ""), (email.value = ""), (text.value = "");
    } else {
      alert("Somthing went wrong!");
    }
  };
  xhr.send(JSON.stringify(formData));
});
