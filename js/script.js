// Form validation
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

window.onload = function() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Validate form before proceeding
            if (!validateForm()) {
                return;
            }

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Send email using EmailJS
            emailjs.send('service_Flannigan', 'template_h561u2f', {
                name: name,
                email: email,
                message: message
            }, 'alp1BoR4TciqCE9-T')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error sending your message. Please try again later.');
            });
        });
    }
};
