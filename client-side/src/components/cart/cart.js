// Initializing values
let price = 29.99;
let quantity = document.getElementById('quantity');
let totalPrice = document.getElementById('total-price');
let itemQuantity = document.getElementById('item-quantity');
let orderTotal = document.getElementById('order-total');
let removeButton = document.querySelector('.remove-item');

// Update total price when quantity changes
quantity.addEventListener('input', () => {
    let qty = parseInt(quantity.value);
    itemQuantity.textContent = qty;
    totalPrice.textContent = `$${(price * qty).toFixed(2)}`;
    orderTotal.textContent = `$${(price * qty).toFixed(2)}`;
});

// Remove product from cart
removeButton.addEventListener('click', () => {
    // Clear the cart or redirect to an empty cart page
    alert("Product removed from cart.");
    window.location.href = "/cart-empty"; // Example redirect, adjust as needed
});
