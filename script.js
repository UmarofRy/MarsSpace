/** @format */

let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let btn1 = document.querySelector(".btn12");

let h1 = document.querySelector(".eror");

function checkInputs() {
   if (inp1.value.trim() !== "" && inp2.value.trim() !== "") {
      btn1.classList.add("btn");
   } else {
      btn1.classList.remove("btn");
   }
}

inp1.addEventListener("input", checkInputs);
inp2.addEventListener("input", checkInputs);

btn1.addEventListener("click", () => {
   if (inp1.value.trim() === "Umarof" && inp2.value.trim() === "Umarof") {
      window.location.href = "index2.html";
   } else {
      h1.innerHTML = "Bunday Accaunt Mavjud emas!";
   }
});

const togglePasswordButton = document.querySelector("#togglePassword");

const passwordInput = document.querySelector("#inp2");

togglePasswordButton.addEventListener("mousedown", () => {
   passwordInput.type = "text";
});

togglePasswordButton.addEventListener("mouseup", () => {
   passwordInput.type = "password";
});

togglePasswordButton.addEventListener("mouseleave", () => {
   passwordInput.type = "password";
});
