const form = document.getElementById("form");
const small = document.getElementsByClassName("error-text");

form.addEventListener("submit", (e) => {
  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addError("firstname", "First Name can not be empty");
  } else {
    removeError("firstname");
  }

  if (lastName === "") {
    addError("lastname", "Last Name can not be empty");
  } else {
    removeError("lastname");
  }

  if (!validateEmail(email)) {
    addError("email", "Please enter a valid email");
  } else {
    removeError("email");
  }

  if (password === "") {
    addError("password", "Password can not be empty");
  } else {
    removeError("password");
  }

  e.preventDefault();
});

const addError = (inputType, message) => {
  const small = form[inputType].parentNode.querySelector("small");
  const icon = form[inputType].parentNode.querySelector("img");
  small.innerText = message;
  small.style.display = "block";
  icon.style.display = "block";
};

const removeError = (inputType) => {
  const small = form[inputType].parentNode.querySelector("small");
  const icon = form[inputType].parentNode.querySelector("img");
  small.style.display = "none";
  icon.style.display = "none";
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
