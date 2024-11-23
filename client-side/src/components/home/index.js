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

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('product-search');
  const searchButton = document.getElementById('search-button');

  // Define the mapping of product names to their respective pages
  const productPages = {
    shirt: '/client-side/src/components/products/shirt.html',
    tshirt: '/client-side/src/components/products/tshirt.html',
    shoes: '/client-side/src/components/products/shoes.html',
    trousers: '/client-side/src/components/products/trousers.html',
    hoodies: '/client-side/src/components/products/hoodies.html',
  };

  // Function to handle navigation based on search
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default button behavior

    const query = searchInput.value.trim().toLowerCase(); // Get and sanitize input

    if (query in productPages) {
      // Navigate to the corresponding product page
      window.location.href = productPages[query];
    } else {
      // Alert user if no match found
      alert(
        'Product not found. Please search for one of the following: shirt, tshirt, shoes, trousers, or hoodies.'
      );
    }
  };

  // Attach click event listener to the search button
  searchButton.addEventListener('click', handleSearch);

  // Add "Enter" key functionality for the search bar
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  });
});
