class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings._inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._formEl = formEl;
  }

  // TODO - implement all the other methods

  _checkInputValidity(inputElement) {
    //  TODO - implent this method
    //  work through errors in console as we did for enableValidation
    // if (!inputElement.validity.valid) {
    //     showInputError(
    //       formElement,
    //       inputElement,
    //       inputElement.validationMessage,
    //       settings,
    //     );
    //   } else {
    //     hideInputError(formElement, inputElement, settings);
    //  }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );

    //  TODO - finish implementing _setEventListeners

    // const buttonElement = formElement.querySelector(
    //  settings.submitButtonSelector
    //  );

    //  toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        //  toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
