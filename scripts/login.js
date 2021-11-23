// Get the elements to show and hide the Password Input

const eye1 = document.querySelector('.eye_button1');
const eye2 = document.querySelector('.eye_button2');
const svg_view = document.querySelector('.svg_view');
const svg_hidden = document.querySelector('.svg_hidden');

//Get Elements to make a function on change on input

const email_input = document.querySelector('[email_input]');
const password_input = document.querySelector('[password_input]');

// function to change the opacity of the button on type;
email_input.addEventListener('keyup', () => {
    const button = document.getElementById('submitButton');
    password_input.addEventListener('keyup', () => {
        button.style.opacity = '1';

    })
})

// function to show and hide the Password Value input
eye2.addEventListener('click', () => {


    const password = document.querySelector("[password_input]");

    if (password.type === "password") {

        password.type = "text";
        password.style.fontSize = "18px";
        svg_hidden.classList.remove('svg_hidden');
        svg_view.classList.add('svg_hidden');


    } else if (password.type === "text") {

        password.type = "password";
        password.style.fontSize = "30px";
        svg_hidden.classList.add('svg_hidden');
        svg_view.classList.remove('svg_hidden');

    }

})