const inputs = document.querySelectorAll("[input]");

inputs.forEach((input) => {
  console.log(input);
  var elem = document.getElementById("myBar");
  var width = 0;
  input.addEventListener("keyup", () => {
    if (input.classList.contains("name")) {
      elem.style.width = "10%";
      elem.innerHTML = "10%";
    }
    if (input.classList.contains("profile")) {
      elem.style.width = "20%";
      elem.innerHTML = "20%";
    }
    if (input.classList.contains("fitolio")) {
      elem.style.width = "30%";
      elem.innerHTML = "30%";
    }
    if (input.classList.contains("interests")) {
      elem.style.width = "40%";
      elem.innerHTML = "40%";
    }
    if (input.classList.contains("experience")) {
      elem.style.width = "50%";
      elem.innerHTML = "50%";
    }
    if (input.classList.contains("languages")) {
      elem.style.width = "60%";
      elem.innerHTML = "60%";
    }
    if (input.classList.contains("social")) {
      elem.style.width = "70%";
      elem.innerHTML = "70%";
    }
    if (input.classList.contains("about")) {
      elem.style.width = "80%";
      elem.innerHTML = "80%";
    }
    if (input.classList.contains("intro")) {
      elem.style.width = "90%";
      elem.innerHTML = "90%";
    }
    if (input.classList.contains("id")) {
      const button = document.getElementById("submitButton");
      elem.style.width = "100%";
      elem.innerHTML = "100%";
      button.style.opacity = "1";
    }
  });
});

// var i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         elem.style.width = width + 10 + "%";
//         elem.innerHTML = width + 10 + "%";
//       }
//     }
//   }
// }
