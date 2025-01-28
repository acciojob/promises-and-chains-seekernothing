// Get form elements
const form = document.getElementById('ageForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

// Add submit event listener to form
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Validate inputs
    if (!nameInput.value || !ageInput.value) {
        alert('Please enter valid details');  // Changed alert message to match test requirements
        return;
    }
    
    // Create and handle promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(ageInput.value) >= 18) {
                resolve(nameInput.value);
            } else {
                reject(nameInput.value);
            }
        }, 4000);
    })
    .then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});