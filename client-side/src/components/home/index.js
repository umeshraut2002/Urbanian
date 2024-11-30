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

  popupMenu.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
  popupMenu.addEventListener('mouseleave', hidePopup);

  document.addEventListener('click', () => {
    popupMenu.style.display = 'none';
  });
});

// input search for the categories 

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-btn");

  const productPages = {
    // for the shirts
    shirt: "/client-side/src/components/shirt/shirt.html",
    shirts: "/client-side/src/components/shirt/shirt.html",
    mensshirt: "/client-side/src/components/shirt/shirt.html",
    Shirt: "/client-side/src/components/shirt/shirt.html",
    shirts: "/client-side/src/components/shirt/shirt.html", 
    

    // for the t shirt
    tshirt: "/client-side/src/components/tshirt/tshirt.html",
    tshirts: "/client-side/src/components/tshirt/tshirt.html",
    tshirtsformens: "/client-side/src/components/tshirt/tshirt.html",
    menstshirts: "/client-side/src/components/tshirt/tshirt.html",

    // for the shoes page naming convention
    shoes: "/client-side/src/components/shoes/shoes.html",
    sportshoes: "/client-side/src/components/shoes/shoes.html",
    casualshoes: "/client-side/src/components/shoes/shoes.html",
    sneakers: "/client-side/src/components/shoes/shoes.html",

    // for the trousers
    trousers: "/client-side/src/components/troussers/trousser.html",
    toussers: "/client-side/src/components/troussers/trousser.html",
    pant: "/client-side/src/components/troussers/trousser.html",
    pants: "/client-side/src/components/troussers/trousser.html",

    // for the hoodies
    hoodies: "/client-side/src/components/hoodies/hoodie.html",
    hoodie: "/client-side/src/components/hoodies/hoodie.html",
  };

  // Function to display error message
  const showError = () => {
    alert(
      "Product not found. Please search for 'shirt', 'tshirt', 'shoes', 'trousers', or 'hoodies'."
    );
  };

  // Search function
  const handleSearch = () => {
    const query = searchInput.value.toLowerCase().trim();

    if (productPages[query]) {
      window.location.href = productPages[query];
    } else {
      showError(); // Call the error message function
    }
  };

  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});
