// Get the elements to show and hide the Password Input

const eyes = document.querySelector("[eye]");

//Get Elements to make a function on change on input

const email_input = document.querySelector("[email_input]");
const password_input = document.querySelector("[password_input]");

// function to change the opacity of the button on type;
email_input.addEventListener("keyup", () => {
  const button = document.getElementById("submitButton");
  password_input.addEventListener("keyup", () => {
    button.style.opacity = "1";
  });
});

// function to show and hide the Password Value input
eyes.addEventListener("click", () => {
  const password = document.querySelector("[password_input]");

  if (password.type === "password") {
    password.type = "text";
    eyes.classList = "eye2";
  } else if (password.type === "text") {
    password.type = "password";
    eyes.classList = "eye";
  }
});
