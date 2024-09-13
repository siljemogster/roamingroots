document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name.length <= 5) {
            document.getElementById('nameError').textContent = 'Name must be more than 5 characters long.';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }
        
        // Subject validation
        const subject = document.getElementById('subject').value.trim();
        if (subject.length <= 15) {
            document.getElementById('subjectError').textContent = 'Subject must be more than 15 characters long.';
            isValid = false;
        } else {
            document.getElementById('subjectError').textContent = '';
        }
        
        // Message validation
        const message = document.getElementById('message').value.trim();
        if (message.length <= 25) {
            document.getElementById('messageError').textContent = 'Message content must be more than 25 characters long.';
            isValid = false;
        } else {
            document.getElementById('messageError').textContent = '';
        }
        
        if (isValid) {
            // Form is valid, display success message
            successMessage.textContent = 'Form submitted successfully!';
            form.reset(); // Clear the form
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.textContent = '';
            }, 5000);
        }
    });
});