// main section

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 50}ms`;
    card.classList.add('appear');
  });
});

// Pop Up 
document.addEventListener('DOMContentLoaded', () => {
  const profileIcon = document.querySelector('.profile');
  const popupMenu = document.querySelector('.popup-menu');
  let hideTimeout;

  // pop up for the user when click 
  const showPopup = () => {
    clearTimeout(hideTimeout); // Cancel any ongoing hide timer
    popupMenu.style.display = 'block';
  };

  // stay pop up for the 5 6 seconds

  const hidePopup = () => {
    hideTimeout = setTimeout(() => {
      popupMenu.style.display = 'none';
    }, 5000); // 5000ms = 5 seconds
  };

  // show click or hover

  profileIcon.addEventListener('mouseenter', showPopup);
  profileIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent bubbling
    showPopup();
  });

  // Start hide timer on mouseleave 

  
  profileIcon.addEventListener('mouseleave', hidePopup);

  //  Preventing the pop up

  popupMenu.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  popupMenu.addEventListener('mouseleave', hidePopup);

  // Hide popup 
  document.addEventListener('click', () => {
    popupMenu.style.display = 'none';
  });
});

// input search for the categories 

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");

  
  const productPages = {
    shirt: "/client-side/src/components/shirt/shirt.html",
    tshirt: "/client-side/src/components/tshirt/tshirt.html",
    shoes: "/client-side/src/components/shoes/shoes.html",
    trousers: "/client-side/src/components/trousers/trousers.html",
    hoodies: "/client-side/src/components/hoodies/hoodies.html",
  };

  // Search function
  const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase(); // Clean and format user input

    if (productPages[query]) {
      // Navigate to the respective product page
      window.location.href = productPages[query];
    } else {
      // Show an error message if the product is not found
      alert(
        "Product not found. Please search for 'shirt', 'tshirt', 'shoes', 'trousers', or 'hoodies'."
      );
    }
  };

  // Add event listener for the "Search" button
  searchButton.addEventListener("click", handleSearch);

  // Add event listener for the "Enter" key in the input field
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
