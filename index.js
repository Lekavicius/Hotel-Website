let hamburgerMenu = document.querySelector(".icon");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message")
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const form = document.querySelector("#forma");

hamburgerMenu.addEventListener("click", showDisplay);

let isValid = false;

function showDisplay() {
    let links = document.querySelector("#menu");
    console.log(links.style.display);
    if (!links.style.display || links.style.display === "none") {
        links.style.display = "block";
        console.log("here");
    }
    else {
        links.style.display = "none";
    }
};




form && form.addEventListener("submit", (event)=>{
    event.preventDefault();
   

    nameError.textContent = "";
    if (inputName.value == "") {
        nameError.textContent = "This field is required";
    }
    else if (inputName.value.length < 5) {
        nameError.textContent = "This field must have 5 characters.";
    }
   

    emailError.textContent = "";
    if (inputEmail.value == "") {
        emailError.textContent = "This field is required"
    }
    else if (!(inputEmail.value).includes("@")) {
        emailError.textContent = "Entered email adress is not valid."
    }


    if (nameError.textContent || emailError.textContent) {
        console.log("Proslo");
    }else {
        console.log("Nije");
    }

})