window.addEventListener('load', function() {
    // let signupDismiss = document.getElementById("signup-dismiss");
    let signupDismiss = document.getElementById("dismisser");
    let signupNotice = document.getElementById("signup-notice");

    signupDismiss.addEventListener("click", () => {
      signupNotice.style.display = "none";
      console.log("signup Clicked!!");
    });

    


 });

