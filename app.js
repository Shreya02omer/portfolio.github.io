// JavaScript for smooth scrolling when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Typing animation for the introduction (my-name class)
const typedText = "SHREYA OMER.";
let index = 0;

function typeText() {
    const element = document.querySelector('.my-name');
    
    // Clear the text after typing is done and start over
    if (index < typedText.length) {
        element.innerHTML += typedText.charAt(index);
        index++;
        setTimeout(typeText, 100);  // Adjust typing speed here
    } else {
        // Pause briefly before clearing and restarting the typing
        setTimeout(() => {
            element.innerHTML = "";  // Clear the text
            index = 0;               // Reset index
            typeText();              // Restart typing
        }, 700);  // Adjust the delay between loops here (2 seconds)
    }
}

window.onload = typeText;


// Modal popup for project details
const modal = document.getElementById('projectModal');
const projectTrigger = document.querySelector('.project-item');
const closeModalBtn = document.querySelector('.modal .close');

projectTrigger.addEventListener('click', function() {
    modal.style.display = 'block';  // Show the modal
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';  // Hide the modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Skill progress bar animation
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.progress-bar');
    
    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;  // Set the width dynamically
        });
    }
});

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return false;  // Prevent form submission
    }

    // Simple email validation regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;  // Allow form submission
}
