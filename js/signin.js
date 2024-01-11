import { UserManager } from "./userManger.js";
const userManager = new UserManager();

$(document).ready(() => {
  $("#signinForm").submit((event) => {
    event.preventDefault();
  });
  $("#signin").click(() => {
    let email = $("#email").val();
    let password = $("#password").val();
    let user = userManager.authenticateUser(email, password);

    if (user) {
      localStorage.setItem("activeuser", JSON.stringify({
        email: user.email,
        id: user.id,
        accountType: user.accountType
      }));
    window.location.replace("../index.html");
    } else {
      $("#errorMessage").text("Invalid Credentials").removeClass("invisible");
    }
  });
});
