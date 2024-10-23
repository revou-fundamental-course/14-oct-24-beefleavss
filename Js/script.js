// Welcome Message Script
document.addEventListener('DOMContentLoaded', function() {
    // Check if the name is already saved in localStorage
    let name = localStorage.getItem('userName');

    // If there's no name saved, prompt the user for their name
    if (!name) {
        name = prompt("Please enter your name:");
        // Save the entered name in localStorage
        localStorage.setItem('userName', name);
    }

    // Display the name on the main page
    document.getElementById('userName').innerText = name;
});

// Form Validation and Output
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get current time
        const currentTime = new Date().toLocaleString();

        // Get form data
        const msgName = document.getElementById('name').value; // Fixed the ID here
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        // Create a new row with the form data
        const tableRow = `
            <tr>
                <td>${currentTime}</td>
                <td>${msgName}</td>
                <td>${dob}</td>
                <td>${gender}</td>
                <td>${message}</td>
            </tr>
        `;

        // Append the new row to the table body
        document.getElementById('resultTable').querySelector('tbody').innerHTML += tableRow;

        // Show the table if it's hidden
        document.getElementById('resultTable').style.display = 'table';

        // Clear the form after submission
        document.getElementById('messageForm').reset();
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});