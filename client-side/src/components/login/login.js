document.querySelector('.request-otp-btn').addEventListener('click', async (event) => {
    event.preventDefault();

    const emailOrPhone = document.getElementById('email-phone').value;

    const API_URL = "";

    if (!emailOrPhone) {
        alert("Please enter your email or phone number.");
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailOrPhone }),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message || "OTP sent successfully!");
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (err) {
        console.error("Error connecting to backend:", err);
        alert("Something went wrong. Please try again.");
    }
});
