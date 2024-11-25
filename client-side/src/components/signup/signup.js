document.querySelector('.signup-btn').addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const API_URL = "";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, password }),
        });

        if (response.ok) {
            const result = await response.json();
            alert("Signup successful!");
        } else {
            const error = await response.json();
            alert(`Signup failed: ${error.message}`);
        }
    } catch (err) {
        console.error("Error connecting to backend:", err);
        alert("Something went wrong. Please try again.");
    }
});


// for the search button 


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
