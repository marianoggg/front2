const userSession = localStorage.getItem("userData");
const dashboardBody = document.getElementById("dashboardBody");

if (userSession) {
  dashboardBody.classList.remove("pepe");
  const firstNameElement = document.getElementById("firstName");
  const firstName = JSON.parse(userSession).firstName;
  console.log("userSession firstName", firstName);
  firstNameElement.textContent = firstName;
} else window.location.href = "../login.html";
