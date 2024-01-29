// array of objects for the new arrivals section
const newArrivals = [
    {
        image: "./images/image 7.jpg",
        title: "T-shirt with tape details",
        rating: 4,
        price: "$120"
    },
    {
        image: "./images/image 8.png",
        title: "Skinny Fit Jeans",
        rating: 4,
        price: "$240"
    },
    {
        image: "./images/image 9.png",
        title: "Checkered Shirt",
        rating: 4,
        price: "$180"
    },
    {
        image: "./images/image 10.png",
        title: "Stripped T-shirt",
        rating: 4,
        price: "$130"
    }
];

// array of objects for the top selling section
const topSelling = [
    {
        image: "./images/img1.png",
        title: "Vertical Stripped Shirt",
        rating: 4,
        price: "$212"
    },
    {
        image: "./images/img2.png",
        title: "Courage Graphic T-shirt",
        rating: 4,
        price: "$145"
    },
    {
        image: "./images/img3.png",
        title: "Loose Permuda Shorts",
        rating: 4,
        price: "$80"
    },
    {
        image: "./images/img4.png",
        title: "Faded Skinny Jeans",
        rating: 4,
        price: "$210"
    }
];
const createDynamicProductCard = (product) => {
    const card = `
        <div class="col-12 col-md-6 col-lg-2 d-flex flex-column align-items-center gap-1">
            <img src="${product.image}" />
            <h3>${product.title}</h3>
            <div class="star-rating" data-rating="${product.rating}"></div>
            <div class="priceshape">${product.price}</div>
        </div>
    `;
    return card;
}
//Append them to #TewArrivals
const newArrivalsContainer = document.getElementById("NewArrivals");
newArrivals.forEach((product) => {
    const card = createDynamicProductCard(product);
    newArrivalsContainer.innerHTML += card;
});
//Append them to #TopSelling
const topSellingContainer = document.getElementById("TopSelling");
topSelling.forEach((product) => {
    const card = createDynamicProductCard(product);
    topSellingContainer.innerHTML += card;
});
