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


// for the search input 


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");

  
  const productPages = {
    // for the shirts

    shirt: "/client-side/src/components/shirt/shirt.html",
    shirts: "/client-side/src/components/shirt/shirt.html",
    mensshirt: "/client-side/src/components/shirt/shirt.html",


    // for the t shirt 

    tshirt: "/client-side/src/components/tshirt/tshirt.html",
    tshirts: "/client-side/src/components/tshirt/tshirt.html",
    tshirtsformens: "/client-side/src/components/tshirt/tshirt.html",
    menstshirts: "/client-side/src/components/tshirt/tshirt.html", 
    

    // for the shoes page namibg xonvention
    shoes: "/client-side/src/components/shoes/shoes.html",
    sportshoes: "/client-side/src/components/shoes/shoes.html",
    casualshoes: "/client-side/src/components/shoes/shoes.html",
    sneakers: "/client-side/src/components/shoes/shoes.html",

    // for the troussers 
    trousers: "/client-side/src/components/troussers/troussers.html",
    toussers: "/client-side/src/components/troussers/troussers.html",
    pant: "/client-side/src/components/troussers/troussers.html",
    pants: "/client-side/src/components/troussers/troussers.html",

    // for the hoodies 
    hoodies: "/client-side/src/components/hoodies/hoodie.html",
    hoodie: "/client-side/src/components/hoodies/hoodie.html",

  };



  // Search function
  const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();

    if (productPages[query]) {
      window.location.href = productPages[query];
    } else {

      alert(
        "Product not found. Please search for 'shirt', 'tshirt', 'shoes', 'trousers', or 'hoodies'."
      );
    }
  };

  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
