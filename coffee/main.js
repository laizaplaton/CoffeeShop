var swiper = new Swiper(".mySwiper",{
    spaceBetween: 30,
    centeredSlides: true, 
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    }, 
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onClick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}

function popup_cart() {
    document.getElementById("shopping_cart").classList.toggle("active");
}

var cart = []; // Array to store cart items

// Function to add item to cart
function add_to_cart(name, price) {
    var item = { name: name, price: price };
    cart.push(item); // Add item to cart array
    update_cart_display(); // Update cart display
}

// Function to update cart display
function update_cart_display() {
    var cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = ""; // Clear previous items

    // Add each item to the cart display
    cart.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item.name + " - ₱" + item.price.toFixed(2);
        cartItemsElement.appendChild(li);
    });
}

// Function to remove cart popup
function remove_cart() {
    var popup = document.getElementById("shopping_cart");
    popup.classList.remove("active");
}
