document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submission if it's a submit button
        window.location.href = '/Sign_Up_Confirm/signupconfirmation.html';
    });
});