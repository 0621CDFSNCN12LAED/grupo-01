
const email = document.querySelector("#email")
const password = document.querySelector("#password")

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


    errors.push(validateInput(email, isEmpty, "El Email esta mal"));
    errors.push(validateInput(password, isEmpty, "La constraseña esta mal"));

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