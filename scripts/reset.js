const email_input = document.querySelector('[email_input]');

// function to change the opacity of the button on type;
email_input.addEventListener('keyup', () => {
    const button = document.getElementById('submitButton');
    button.style.opacity = '1';
})