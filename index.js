let hamburgerMenu = document.querySelector(".icon");

hamburgerMenu.addEventListener("click", showDisplay);

function showDisplay() {
    let links = document.querySelector("#menu");

    if (links.style.display === "none") {
        links.style.display = "block";
    }
    else {
        links.style.display = "none";
    }
};


const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message")
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const form = document.querySelector("#forma");

let users = [];
let isValid = false;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
   

    if (inputName.value == "") {
        nameError.textContent = "This field is required";
    }
   else if (inputName.value.length < 5) {
    nameError.textContent = "This field must have 5 characters.";
   }

    if (inputEmail.value == "") {
        emailError.textContent = "This field is required"
    }
    else if (!(inputEmail.value).includes("@")) {
        emailError.textContent = "Entered email adress is not valid."
    }

    
    inputName.value = "";
    inputEmail.value = "";
    inputMessage.value = "";
})