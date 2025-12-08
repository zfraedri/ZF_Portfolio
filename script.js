// // ====================
// MOBILE NAVIGATION TOGGLE
// ====================
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.mobile-nav');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const open = nav.classList.contains('active');
        toggle.setAttribute('aria-expanded', open);
    });
}


// ====================
// LIGHTBOX FUNCTIONALITY
// ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (lightbox && lightboxImg) {
    document.querySelectorAll('.stills img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}


// ====================
// FORM VALIDATION
// ====================
function checkContactForm(event) {
    event.preventDefault();

    // Get form inputs
    let firstName = document.getElementById("fName");
    let lastName = document.getElementById("lName");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let errorList = document.getElementById("formErrors");

    // Safety check
    if (!firstName || !lastName || !email || !subject || !message || !errorList) return;

    // Clear previous errors
    [firstName, lastName, email, subject, message].forEach(input => {
        input.classList.remove("error");
    });
    errorList.classList.add("hidden");
    errorList.innerHTML = "";

    // Regex patterns
    let namePattern = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;
    let errorMessages = [];

    // Validate first name
    if (!namePattern.test(firstName.value.trim())) {
        isValid = false;
        errorMessages.push("Please enter a valid first name.");
        firstName.classList.add("error");
    }

    // Validate last name
    if (!namePattern.test(lastName.value.trim())) {
        isValid = false;
        errorMessages.push("Please enter a valid last name.");
        lastName.classList.add("error");
    }

    // Validate email
    if (!emailRegex.test(email.value.trim())) {
        isValid = false;
        errorMessages.push("Please enter a valid email address.");
        email.classList.add("error");
    }

    // Validate subject
    if (subject.value.trim().length < 2) {
        isValid = false;
        errorMessages.push("Please enter a subject.");
        subject.classList.add("error");
    }

    // Validate message (min 10 chars)
    if (message.value.trim().length < 10) {
        isValid = false;
        errorMessages.push("Please enter a message with at least 10 characters.");
        message.classList.add("error");
    }

    // Display errors
    if (!isValid) {
        errorList.classList.remove("hidden");
        const ul = document.createElement("ul");
        errorMessages.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            ul.appendChild(li);
        });
        errorList.appendChild(ul);
        return; // Stop submission
    }

    // Submit if valid
    document.getElementById("contact-form").submit();
}

// Attach event listener only if the form exists
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", checkContactForm);
}
