document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".card");
    const inputs = form.querySelectorAll("input[required]");
    const errorMessages = form.querySelectorAll(".error");
  
    form.addEventListener("submit", function(event) {
      let valid = true;
  
      inputs.forEach(input => {
        if (!input.validity.valid) {
          valid = false;
          input.classList.add("error-border");
          input.nextElementSibling.style.display = "block";
        } else {
          input.classList.remove("error-border");
          input.nextElementSibling.style.display = "none";
        }
      });
  
      if (!valid) {
        event.preventDefault();
      }
    });
  
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        if (input.validity.valid) {
          input.classList.remove("error-border");
          input.nextElementSibling.style.display = "none";
        }
      });
    });
  });
  