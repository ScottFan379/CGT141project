function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill out all the blank space');
    } else {
        // Form is valid, you can submit the form or perform other actions here
        alert('Thank you!');
    }
}