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
