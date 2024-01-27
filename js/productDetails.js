
import Products from './database/Products.js';

const products = new Products();
console.log(products);

 //href="product-details.html?id=1" for the product in home page
   // Get the product ID from the URL parameters
 //    const urlParams = new URLSearchParams(window.location.search);
  //    const productId = urlParams.get('id');
const id = 'pid3'

 var product  =products.getProductById(id);
console.log(product);
const imgs = product.images.split(',');
//console.log(imgs[0]);
let currentQuantity=1;



var bodyContent = 
`  <div class="">
<div class="container py-4">
  <!-- Breadcrumb -->
  <nav class="d-flex">
    <h6 class="mb-0">
      <a href="/index.html" class="text-black-50">Home</a>
      <span class="text-black-50 mx-2"> > </span>
      <a href="" class="text-black-50">Shop</a>
      <span class="text-black-50 mx-2"> > </span>
      <a href="" class="text-black-50">Men</a>
      <span class="text-black-50 mx-2"> > </span>
      <a href="" class="text-black">T-shirts</a>
    </h6>
  </nav>
  <!-- Breadcrumb -->
</div>
</div>
<!-- Heading -->
<section class="py-5">
<div class="container">
  <div class="row gx-5 ">
    <aside class="col-lg-6">
         <div class="imgsContainer">
<div class="d-flex align-items-center mb-3 side ">
<div class="smallImg">
<a data-fslightbox="mygalley" class=" mx-1 rounded-2" target="_blank" data-type="image" href="" class="item-thumb">
  <img id="img1" class="rounded-2 img" src="${imgs[1]}" />
</a>
<a data-fslightbox="mygalley" class=" mx-1 rounded-2" target="_blank" data-type="image" href="" class="item-thumb">
  <img id="img2" class="rounded-2 img" src="${imgs[2]}" />
</a>
<a data-fslightbox="mygalley" class=" mx-1 rounded-2" target="_blank" data-type="image" href="" class="item-thumb">
  <img id="img3" class="rounded-2 img" src="${imgs[3]}" />
</a>
</div>
</div>
      <div class="">
        <div class=" rounded-4 mb-3 d-flex justify-content-center">
            <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="">
              <img id="img0" style="max-width: 100%; max-height: 100vh; margin: auto;"
               class="rounded-4 fit" src="${imgs[0]}" />
            </a>
          </div>
      </div>
    </div>
        
     
      
      <!-- thumbs-wrap.// -->
      <!-- gallery-wrap .end// -->
      </aside>
      <!-- end of product photos -->
      <main class="col-lg-6">
        <div class="ps-lg-3" id="product-details">
          <h1 id="productName" class="title text-dark header">${product.productName}</h1>
          <div class="d-flex flex-row my-3">
            <div class="text-warning mb-1 me-2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              
              <!-- <i class="fas fa-star-half-alt"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star-half-stroke"></i> -->
              <span class="ms-1 rate">
              ${product.rating}
              </span>
            </div>
           
          </div>
          <div class="mb-3">
            <span class=" price">$</span>
            <span id="newPrice" class=" price">${product.price}</span>
            <span class=" oldPrice">$300</span>
            <span class=" discount" >
            <span >-</span>
            <span id="discountVal" >${product.discount}</span>
            <span >%</span>
          </span>
          </div>

          <p id="descriptionContent" class="description">
          ${product.details}
          </p>
        <hr/>
         <div class="lable">Choose Size</div>
         <div id="size" class="opContainer">
         <button id="small" class="option">Small</button>
         <button id="medium" class="option">Medium</button>
         <button id="large" class="option">Large</button>
         <button id="xlarge" class="option">X-Large</button>
        </div>
        <hr/>
        <div class="qContainer">
        <div class="quantityContainer">
            <button class="operator minus" onclick="decrease()">-</button>
            
             <span id="quantityDisplay" class="numbers">1</span>

            <button  class="operator plus" onclick="increase()" >+</button>
        </div>
        <button id="addToCartBtn" class="btnCart" >Add to Cart</button>
    </div>

</div>
      </main>
<!-- end of container & row -->
      </div>
</div>
      </section>
      <hr/>
      <section id="review">
        <div class="reiew-heading">
          <!-- <span>comment</span> -->
          <h1><b> Reviews </b></h1>

        </div>

        <!-- box container -->
        <div class="box-container">
          <div class="box">
            <div class="box-top">
              <div>
                
                <div class="user-name">
                  <strong>Samantha D.</strong>
                  
                </div>

              </div>
              <!-- rivews -->
              <div class="reviews">
                <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <!-- <i class="far fa-star"></i> -->

              </div>

            </div>
            <div class="comment">
          <p>"I absolutely love this t-shirt! 
            The design is unique and the fabric 
            feels so comfortable. As a fellow 
            
            designer, I appreciate the attention
             to detail. It's become my favorite 
             go-to shirt."</p>            
                  </div>
                  <div class="comment">
                    <p>Posted on August 14, 2023</p>

                  </div>
          </div>
        
        <!-- ---------------review----------------- -->
        <div class="box">
          <div class="box-top">
            <div>
             
              <div class="user-name">
                <strong>Alex M.</strong>
                
              </div>

            </div>
            <!-- rivews -->
            <div class="reviews">
              <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <!-- <i class="far fa-star"></i> -->

            </div>

          </div>
          <div class="comment">
        
            <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
        </div>
        <div class="comment">
          <p>Posted on August 14, 2023</p>

        </div>
        </div>

<!-- ---------------review----------------- -->
<div class="box">
<div class="box-top">
<div>

<div class="user-name">
<strong>Ethan R.</strong>

</div>

</div>
<!-- rivews -->
<div class="reviews">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<!-- <i class="far fa-star"></i> -->

</div>

</div>
<div class="comment">
<p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
</div>
<div class="comment">
<p>Posted on August 15, 2023</p>

</div>
</div>
<!-- ---------------review----------------- -->
<div class="box">
<div class="box-top">
  <div>
    
    <div class="user-name">
      <strong>Olivia P.</strong>
      
    </div>

  </div>
  <!-- rivews -->
  <div class="reviews">
    <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <!-- <i class="far fa-star"></i> -->

  </div>

</div>
<div class="comment">
  <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
</div>

<div class="comment">
<p>Posted on August 17, 2023</p>

</div>
</div>

<!-- ---------------review----------------- -->
<div class="box">
<div class="box-top">
  <div>
   
    <div class="user-name">
      <strong>Liam K.</strong>
      
    </div>

  </div>
  <!-- rivews -->
  <div class="reviews">
    <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <i class="fa fa-star"></i>
  <!-- <i class="far fa-star"></i> -->

  </div>

</div>
<div class="comment">
  <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
</div>
<div class="comment">
<p>Posted on August 18, 2023</p>

</div>
</div>
<!-- ---------------review----------------- -->
<div class="box">
<div class="box-top">
<div>

<div class="user-name">
<strong>Ava H.</strong>

</div>

</div>
<!-- rivews -->
<div class="reviews">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<!-- <i class="far fa-star"></i> -->

</div>

</div>
<div class="comment">
<p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
</div>
<div class="comment">
<p>Posted on August 19, 2023</p>

</div>
</div>

      </div>

      </section> `

   $("body").append(bodyContent)

  
   const innerTxtQuantity = document.getElementById('quantityDisplay').textContent;
   currentQuantity = parseInt(innerTxtQuantity, 10);


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
//###########################################################

       
        document.addEventListener('DOMContentLoaded', function () {
          console.log(product.price);
           // Get elements
           const addToCartButton = document.getElementById('addToCartBtn');
           const sizeButtons = document.querySelectorAll('.option');
        

          sizeButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                // Get the clicked size from the button's text content
                const selectedSize = button.textContent;

                // Store the selected size in local storage
                localStorage.setItem('selectedSize', selectedSize);

                
                 updateSelectedSizeUI(selectedSize);
                console.log(selectedSize);
            });
        });
        // Function to update the UI based on the selected size 
    function updateSelectedSizeUI(selectedSize) {
      // Remove any existing 'selected' class from all size buttons
      sizeButtons.forEach(function (button) {
          button.classList.remove('selected');
      });

      // Add the 'selected' class to the clicked size button
      const selectedButton = document.getElementById(`${selectedSize.toLowerCase()}`);
      if (selectedButton) {
          selectedButton.classList.add('selected');
      }
  }
      
          // Add event listener to the "Add to Cart" button
          addToCartButton.addEventListener('click', function () {
              // Get selected options
               // Default to Medium if no size selected
              const selectedSize = localStorage.getItem('selectedSize') || 'Medium'; 
          
      
              // Create an object to represent the product
              const choosenProduct = {
                 id:id,
                  name: product.productName,
                  size: selectedSize,
                  price: product.price,
                  quantity: currentQuantity
              };
      
              // Get existing cart items from local storage
              let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
              cartItems.push(choosenProduct)
             // Save the updated cart items to local storage
              localStorage.setItem('cart', JSON.stringify(cartItems));
      
              // Alert the user that the product has been added to the cart (you can replace this with a better UI)
              alert('Product added to cart!');
          });
      });


