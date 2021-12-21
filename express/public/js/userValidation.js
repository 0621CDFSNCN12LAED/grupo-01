const name = document.querySelector("#name")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const birthdate = document.querySelector("#birthdate")
const adress = document.querySelector("#adress")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const formulario = document.querySelector("form");

const errorList = document.querySelector("#errors");

formulario.addEventListener("submit", (event) =>{
    const errors = formIsInvalid();
    if (errors.length > 0){
        console.log(errors)

    event.preventDefault()
    errorList.classList.remove("hidden");

    errorList.innerHTML = "";
    for (const error of errors) {
      errorList.innerHTML += `<li>${error}</li>`;
    }
    } else {
        errorList.classList.add("hidden");
        errorList.innerHTML = "";
      }
    });

    

function formIsInvalid(){

     let errors = [];

    errors.push(validateInput(name, isEmpty, "El nombre esta mal"));
    errors.push(validateInput(username, isEmpty, "El nombre de usuario esta mal"));
    errors.push(validateInput(email, isEmpty, "El Email esta mal"));
    errors.push(validateInput(birthdate, isEmpty, "El cumpleanios esta mal"));
    errors.push(validateInput(adress, isEmpty, "La direccion esta mal"));
    errors.push(validateInput(password, isEmpty, "La constraseña esta mal"));
    errors.push(validateInput(confirmPassword, isEmpty, "La confirmacion de password esta mal"));

    return errors.filter((msg) => msg != null);
}

function isEmpty(input){
return input.value.trim() == ""
}


function validateInput(input,validationFunction,message){
if(validationFunction(input)) {
        return message
}else{
    return null
}
}