const userInput = document.getElementById("user");
const passInput = document.getElementById("pass");
const submitButton = document.querySelector("button");
const resultContainer = document.getElementById("loginResultContainer");
localStorage.removeItem("userData");

submitButton.addEventListener("click", () => fetchLogin());

function fetchLogin() {
  console.log("userInput.value", userInput.value);
  console.log("passInput.value", passInput.value);

  /* fetch */
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var obj = JSON.stringify({
    username: userInput.value,
    password: passInput.value,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: obj,
    redirect: "follow",
  };

  fetch("http://localhost:8000/users/loginUser", requestOptions)
    .then((respuesta) => respuesta.json())
    .then((dataJson) => login(dataJson))
    .catch((error) => console.log(error));
}

function login(dataJson) {
  console.log("resultado desde el bknd -->>", dataJson);
  resultContainer.classList.remove("messageOK");
  resultContainer.classList.add("messageErr");
  let msge = "Usuario o password incorrectos";
  if (dataJson) {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        username: dataJson.username,
        firstName: dataJson.firstName,
        lastName: dataJson.lastName,
      })
    );
    window.location.href = "./views/dashboard.html";
  } else resultContainer.textContent = msge;
}
