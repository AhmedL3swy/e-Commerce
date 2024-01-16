let labelCoupon = document.querySelector("#CouponDiv");
let DivCoupon = document.querySelector(".coupon");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let inputValue = document.querySelectorAll("input[type=text]");
let pricing = document.querySelectorAll(".pricing");
let mainPrice = document.querySelectorAll(".main-price");



labelCoupon.addEventListener("click",function() {
    DivCoupon.style.display = "block";
    labelCoupon.remove();
});//end function click


for(let i = 0 ; i < plus.length ; i++) {
    plus[i].addEventListener("click",function(){
        inputValue[i].value++;
        pricing[i].innerHTML = Number(mainPrice[i].innerHTML)*inputValue[i].value   ;
    });//end plus function
}


for(let i = 0 ; i < minus.length ; i++) {
    minus[i].addEventListener("click",function(e){
        inputValue[i].value--;
        pricing[i].innerHTML = Number(mainPrice[i].innerHTML)*inputValue[i].value   ;
        if(inputValue[i].value == "0") {
            pricing[i].innerHTML = Number(mainPrice[i].innerHTML)   ;
            swalDelete(i);
            // let msg = confirm("u want to delete this product?");
            // if (msg) {
            //     this.parentNode.parentNode.parentNode.remove();
            // }
            // else {
            //     inputValue[i].value ="1";
            // }
        }
    });//end plus function
}


function swalDelete(index) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          minus[index].parentNode.parentNode.parentNode.remove();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
          inputValue[index].value ="1";
        }
      });
}