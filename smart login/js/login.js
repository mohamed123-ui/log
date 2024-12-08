InputLogEmail = document.querySelector("#InputLogEmail");
InputLogPassword = document.querySelector("#InputLogPassword");
SignIn = document.querySelector("#signIn");
checkCorrect = document.querySelector(".check-correct");
var arr = [];
getLOcalStorage();
function login() {
  if (Validation(InputLogEmail) && Validation(InputLogPassword)) {
    var inputLog = {
      emailLog: InputLogEmail.value,
      passwordLog: InputLogPassword.value,
    };
    var storedUsers = JSON.parse(localStorage.getItem("list")) || [];
    var userFound = storedUsers.find(
      (user) =>
        user.email === inputLog.emailLog &&
        user.password === inputLog.passwordLog
    );
    if (userFound) {
      window.location.href = "../home.html";
    } else {
      checkCorrect.classList.replace("d-none", "d-block");
    }
    arr.push(inputLog);
    console.log(arr);
    clearForm();
  }
}
SignIn.addEventListener("click", login);

function getLOcalStorage() {
  if (localStorage.getItem("list") != null) {
    arr = JSON.parse(localStorage.getItem("list"));
  }
}
function clearForm() {
  InputLogEmail.value = "";
  InputLogPassword.value = "";
}
function Validation(input) {
  var regax = {
    InputLogEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    InputLogPassword: /^.{8,}$/,
  };

  console.log(input.id);
  if (regax[input.id].test(input.value)) {
    //true
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
