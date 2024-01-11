let sellers = [];

let nameRegex = /^[A-Z][a-zA-Z]{2,12}\s[A-Z][a-zA-Z]{2,12}$/; // Ahmed Mohamed
let emailRegex = /^\w{4,15}@(yahoo|gmail|outlook).(com|net)$/; // ahmed@gmail.com
let passRegex = /^[A-Z][a-zA-Z]{5,12}\d{1,}\D{1}[a-zA-Z]{3,12}$/; // Ahmedd99@ahd

if (localStorage.getItem("sellers") != null) {
  sellers = sellers = JSON.parse(localStorage.getItem("sellers"));
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  var userName = document.getElementById("userName").value;
  var userPassword = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var userMail = document.getElementById("userMail").value;

  var elErrorName = document.getElementById("error_name");
  var elErrorPass = document.getElementById("error_pass");
  var elErrorConfirm = document.getElementById("error_confirm");
  var elErrorMail = document.getElementById("error_mail");

  //to check the user exist or not
  if (isUsernameExists(userName)) {
    elErrorName.innerText =
      "Username already exists. Please choose a different one.";
    document.getElementById("userName").style.border = "2px solid red";
    return false;
  }

  //to check the mail exist or not
  if (isUsermailExists(userMail)) {
    elErrorMail.innerText =
      "Usermail already exists. Please choose a different one.";
    document.getElementById("userMail").style.border = "2px solid red";
    return false;
  }

  if (userName == "" || userName == null) {
    elErrorName.innerText = "Please Provide Your Full Name and Last Name";
    document.getElementById("userName").style.border = "2px solid red";
    return false;
  }

  if (!nameRegex.test(userName)) {
    elErrorName.innerText = "Invalid Name Format";
    document.getElementById("userName").style.border = "2px solid red";
    return false;
  }

  elErrorName.innerText = "";
  document.getElementById("userName").style.border = "2px solid green";

  if (userPassword == "" || userPassword == null) {
    elErrorPass.innerText =
      "Please Enter Pass With 6 Digits and Numbers and Special Characters";
    document.getElementById("userPassword").style.border = "2px solid red";
    return false;
  }

  if (!passRegex.test(userPassword)) {
    elErrorPass.innerText = "Invalid Password Format";
    document.getElementById("userPassword").style.border = "2px solid red";
    return false;
  }

  elErrorPass.innerText = "";
  document.getElementById("userPassword").style.border = "2px solid green";

  if (confirmPassword == "" || confirmPassword == null) {
    elErrorConfirm.innerText = "Please Confirm Your Password";
    document.getElementById("confirmPassword").style.border = "2px solid red";
    return false;
  }

  if (userPassword !== confirmPassword) {
    elErrorConfirm.innerText = "Passwords do not match";
    document.getElementById("confirmPassword").style.border = "2px solid red";
    return false;
  }

  elErrorConfirm.innerText = "";
  document.getElementById("confirmPassword").style.border = "2px solid green";

  if (userMail == "" || userMail == null) {
    elErrorMail.innerText = "Please Enter Valid Mail";
    document.getElementById("userMail").style.border = "2px solid red";
    return false;
  }

  if (!emailRegex.test(userMail)) {
    elErrorMail.innerText = "Invalid Email Format";
    document.getElementById("userMail").style.border = "2px solid red";
    return false;
  }

  elErrorMail.innerText = "";
  document.getElementById("userMail").style.border = "2px solid green";

  let seller = {
    UserName: userName,
    UserPass: userPassword,
    UserMail: userMail,
  };

  sellers.push(seller);
  localStorage.setItem("sellers", JSON.stringify(sellers));

  return true;
} //end validation form

let userPassword = document.getElementById("userPassword");
let confirmPassword = document.getElementById("confirmPassword");

let withIconFirst = document.querySelector(".with-first");
let withIconSecond = document.querySelector(".with-second");

//first input password
withIconFirst.addEventListener("click", function () {
  if (userPassword.type == "password") {
    userPassword.type = "text";
    withIconFirst.src = "../images/eye-open.png";
  } else {
    userPassword.type = "password";
    withIconFirst.src = "../images/eye-close.png";
  }
});

//second input password
withIconSecond.addEventListener("click", function () {
  if (confirmPassword.type == "password") {
    confirmPassword.type = "text";
    withIconSecond.src = "../images/eye-open.png";
  } else {
    confirmPassword.type = "password";
    withIconSecond.src = "../images/eye-close.png";
  }
});

//function to check the user name
function isUsernameExists(username) {
  return sellers.some((seller) => seller.UserName === username);
}

//function to check the user mail
function isUsermailExists(usermail) {
  return sellers.some((seller) => seller.UserMail === usermail);
}
