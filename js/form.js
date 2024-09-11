document.getElementById("contactForm").addEventListener("submit"), function(event) {
    event.preventDefault();

    let isValid = true; 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name.length <= 5) {
        document.getElementById("nameError").textContent = "Name must be more than 5 characters long.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (subject.length <= 15) {
        document.getElementById("subjectError").textContent = "Subject must be more than 15 characters long.";
        isValid = false;
    } else {
        document.getElementById("subjectError").textContent = "";
    }

    f (message.length <= 25) ;{
        document.getElementById("messageError").textContent = "Message content must be more than 25 characters long.";
        isValid = false;
    }  
        document.getElementById("messageError").textContent = "";
    }

 
    if (isValid) {
        alert("Form submitted successfully!");
    }


