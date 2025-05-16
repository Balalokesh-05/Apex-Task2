document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const phone = document.getElementById("phone").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[6-9]\d{9}$/; 

        if (!name || !email || !message || !phone) {
            alert("All fields are required.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit  phone number.");
            return;
        }

        
        const fakeNumbers = ["1234567890", "0000000000", "1111111111"];
        if (fakeNumbers.includes(phone)) {
            alert("Please enter a real phone number.");
            return;
        }

        alert("Form submitted successfully!");

        
        form.reset();
    });
});
