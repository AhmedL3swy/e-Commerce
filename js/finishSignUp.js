let numberRegex = /^01[0125]\d{8}$/; // 01026340338
let numberZip = /^\d{5}$/ 
let imagesAllow = /\.(jpg|jpeg|png)$/i; //.jpg / .png


let errorPhone = document.querySelector("#error-phone");
let errorZip = document.querySelector("#error-Zip");
let errorImg = document.querySelector("#error-img");
let errorPdf = document.querySelector("#error-pdf");


document.querySelector("#formValidation").addEventListener("submit" , function(event){
    if(!validateFun()){
        event.preventDefault();
    }
});

function validateFun() {
    let userPhone = document.querySelector("#userPhone").value;
    let userZip = document.querySelector("#userZip").value;
    let userImg = document.querySelector("#inputfile").value;

    if(userPhone == "" || userPhone == null){
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

    if(userZip == "" || userZip == null){
        errorZip.innerHTML = "You can't Add empty Zip";
        document.querySelector("#userZip").style.border = "2px solid red";
        return false;
    }

    if (!numberZip.test(userZip)) {
        errorZip.innerHTML = "Invalid Pattern";
        document.querySelector("#userZip").style.border = "2px solid red";
        return false;
    }
    errorZip.innerHTML = "";
    document.querySelector("#userZip").style.border = "2px solid green";

    if (userImg == "" || userImg == null){
        errorImg.innerHTML = "You must enter the photo of product";
        document.querySelector("#inputfile").style.border = "2px solid red";
        return false;
    }
    if (!imagesAllow.test(userImg)){
        errorImg.innerHTML = "you must enter a valid extension";
        document.querySelector("#inputfile").style.border = "2px solid red";
        return false;
    }
    errorImg.innerHTML = "";
    document.querySelector("#inputfile").style.border = "2px solid green";


    return true;
}

