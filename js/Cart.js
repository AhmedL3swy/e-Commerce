let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let inputValue = document.querySelectorAll(".quantity-input");
let price = document.querySelectorAll(".price");

let oldPrice = price.innerHTML;


for(let i = 0 ; i < plus.length ; i++) {
    plus[i].addEventListener("click",function(){
        inputValue[i].value++;
        price[i].innerHTML = Number(price[i].innerHTML)*inputValue[i].value   ;
    });//end plus function
}


for(let i = 0 ; i < minus.length ; i++) {
    minus[i].addEventListener("click",function(e){
        let current = --inputValue[i].value;
        price[i].innerHTML = Number(price[i].innerHTML) / (++current)   ;
        if(inputValue[i].value == "0") {
          price[i].innerHTML = Number(price[i].innerHTML)   ;
            swalDelete(i);
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
          minus[index].parentNode.parentNode.parentNode.parentNode.remove();
        } else if (
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