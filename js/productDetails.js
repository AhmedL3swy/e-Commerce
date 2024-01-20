
let currentQuantity=1,innerTxt=0;


let myDiv = document.getElementById('quantityDisplay');
 innerTxt = myDiv.innerText;
 currentQuantity = parseInt(innerTxt, 10);


console.log(currentQuantity);

// Function to decrease quantity
function decreaseQuantity() {
  if (currentQuantity != 0) {
    return currentQuantity--;
  }else
  {
    console.log("Cannot decrease beyond zero.");
    return 0; 
  }
}

// Function to increase quantity
function increaseQuantity() {
  return currentQuantity++;
 
}

// Update the quantity display on the HTML page
function updateQuantityDisplay() {
  document.getElementById('quantityDisplay').textContent = currentQuantity;
}

// Function to handle decrease button click
function decrease() {
  currentQuantity.innerText = decreaseQuantity();
  updateQuantityDisplay();
}

// Function to handle increase button click
function increase() {
  currentQuantity.innerHTML = increaseQuantity();
  updateQuantityDisplay();
}