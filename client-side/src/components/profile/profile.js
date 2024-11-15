// Get the profile action buttons
const myOrdersBtn = document.getElementById('my-orders-btn');
const deleteAccountBtn = document.getElementById('delete-account-btn');
const orderHistory = document.getElementById('order-history');
const backToProfileBtn = document.getElementById('back-to-profile-btn');

// Show the user's order history
myOrdersBtn.addEventListener('click', () => {
    orderHistory.style.display = 'block'; // Show order history section
});

// Go back to the profile page
backToProfileBtn.addEventListener('click', () => {
    orderHistory.style.display = 'none'; // Hide order history section
});

// Delete account functionality (you can add confirmation steps here)
deleteAccountBtn.addEventListener('click', () => {
    const confirmDelete = confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
        alert("Your account has been deleted.");
        // Add logic to delete account (e.g., API call)
        // Redirect to home page or logout
        window.location.href = "/login"; // Example redirection
    }
});
