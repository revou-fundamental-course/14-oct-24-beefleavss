// Welcome Message Script
document.addEventListener('DOMContentLoaded', function() {
    let name = prompt("Please enter your name:");
    document.getElementById('userName').innerText = name;
});

// Form Validation and Output
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get current time
        const currentTime = new Date().toLocaleString();

        // Get form data
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;

        // Create a new row with the form data
        const tableRow = `
            <tr>
                <td>${currentTime}</td>
                <td>${name}</td>
                <td>${dob}</td>
                <td>${gender}</td>
                <td>${message}</td>
            </tr>
        `;

        // Append the new row to the table body
        document.getElementById('formResult').innerHTML += tableRow;

        // Show the table if it's hidden
        document.getElementById('resultTable').style.display = 'table';

        // Clear the form after submission
        document.getElementById('messageForm').reset();
    });
});