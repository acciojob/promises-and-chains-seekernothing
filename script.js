// Get form elements - using correct string quotes for IDs
const form = document.getElementById('ageForm');
const nameInput = document.getElementById('name');  // 'name' needs quotes
const ageInput = document.getElementById('age');    // 'age' needs quotes

// Add submit event listener to form
form.addEventListener('submit', function(event) {   // 'submit' not 'click', proper function syntax
    event.preventDefault();
    
    // Validate inputs
    if (!nameInput.value || !ageInput.value) {
        alert('Please fill in all fields');
        return;
    }
    
    // Create and handle promise
    new Promise((resolve, reject) => {             // 'new Promise' not 'newPromise'
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