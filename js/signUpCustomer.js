let customers = [];

let nameRegex = /^[A-Z][a-zA-Z]{2,12}/; // Ahmed Mohamed
let emailRegex = /^\w{4,15}@(yahoo|gmail|outlook).(com|net)$/; // ahmed@gmail.com
let passRegex = /^[A-Z][a-zA-Z]{5,12}\d{1,}\D{1}[a-zA-Z]{3,12}$/; // Ahmedd99@ahd
let numberRegex = /^01[0125]\d{8}$/; // 01026340338


let errorPhone = document.querySelector("#error-phone");


if (localStorage.getItem("sellers") != null) {
//   sellers = sellers = JSON.parse(localStorage.getItem("sellers"));
customers = customers = JSON.parse(localStorage.getItem("sellers"));

}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

function validateForm() {
  var userNameFirst = document.getElementById("FirstName").value;
  var userNameLast = document.getElementById("LastName").value;
  var userPassword = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var userMail = document.getElementById("userMail").value;
  let userPhone = document.querySelector("#userPhone").value;
 

  // var elErrorName = document.getElementById("error_name");
  var elErrorNameOne = document.getElementById("error_name1");
  var elErrorNameTwo = document.getElementById("error_name2");
  var elErrorPass = document.getElementById("error_pass");
  var elErrorConfirm = document.getElementById("error_confirm");
  var elErrorMail = document.getElementById("error_mail");


  //to check the mail exist or not
  if (isUsermailExists(userMail)) {
    elErrorMail.innerText =
      "Usermail already exists. Please choose a different one.";
    document.getElementById("userMail").style.border = "2px solid red";
    return false;
  }
//empty username
  if (userNameFirst == "" || userNameFirst == null) {
    elErrorNameOne.innerText = "Please Provide Your First Name";
    document.getElementById("FirstName").style.border = "2px solid red";
    return false;
  }

  if (!nameRegex.test(userNameFirst)) {
    elErrorNameOne.innerText = "Invalid Name Format";
    document.getElementById("FirstName").style.border = "2px solid red";
    return false;
  }

  elErrorNameOne.innerText = "";
  document.getElementById("FirstName").style.border = "2px solid green";

  if (userNameLast == "" || userNameLast == null) {
    elErrorNameTwo.innerText = "Please Provide Your First Name";
    document.getElementById("LastName").style.border = "2px solid red";
    return false;
  }

  if (!nameRegex.test(userNameLast)) {
    elErrorNameTwo.innerText = "Invalid Name Format";
    document.getElementById("LastName").style.border = "2px solid red";
    return false;
  }

  elErrorNameTwo.innerText = "";
  document.getElementById("LastName").style.border = "2px solid green";

//empty password
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
//confirm password
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
//empty mail
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
//phone number
  if (userPhone == "" || userPhone == null) {
    errorPhone.innerHTML = "You can't Add empty number";
    document.querySelector("#userPhone").style.border = "2px solid red";
    return false;
  }

  if (!numberRegex.test(userPhone)) {
    errorPhone.innerHTML = "Invalid Pattern";
    document.querySelector("#userPhone").style.border = "2px solid red";
    return false;
  }
  errorPhone.innerHTML = "";
  document.querySelector("#userPhone").style.border = "2px solid green";


 
 
  let customer = {
    UserFirstName: userNameFirst,
    UserLastName: userNameLast,
    UserPass: userPassword,
    UserMail: userMail,
    UserPhone : userPhone,
  };

  customers.push(customer);
  localStorage.setItem("customers", JSON.stringify(customers));

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


//function to check the user mail
function isUsermailExists(usermail) {
  return customers.some((customer) => customer.UserMail === usermail);
}