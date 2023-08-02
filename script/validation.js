//validation
//check input
const checkInputValidity = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  //show error
  if(!inputElement.validity.valid){
    inputElement.classList.add(".form__input_type_error");
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("form__input-error_active");
  } 
  //hide error
  else{
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  }
}


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("button_inactive");
    buttonElement.disabled = false;
  }
};

//set event linstener
const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit");
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function(){
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList,buttonElement);
    })
  })
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__input-form"));
  formList.forEach((formElement) => {
    setEventListener(formElement);
  })
}

enableValidation();