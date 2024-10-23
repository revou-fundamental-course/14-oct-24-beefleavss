// Welcome Message Script
document.addEventListener('DOMContentLoaded', function() {
    let name = prompt("Please enter your name:");
    document.getElementById('userName').innerText = name;
});

// Form Validation and Output
document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    const resultDiv = document.getElementById('formResult');
    resultDiv.innerHTML = `
        <h3>Form Details</h3>
        <p>Name: ${name}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Gender: ${gender}</p>
        <p>Message: ${message}</p>
    `;
});