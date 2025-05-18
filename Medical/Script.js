// ===== Responsive Navigation Toggle =====
document.getElementById("nav-toggle").addEventListener("click", function () {
    const nav = document.getElementById("navbar").querySelector("ul");
    nav.classList.toggle("show");
  });
  
  // ===== Form Validation for Appointment and Contact Forms =====
  document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
  
    forms.forEach(form => {
      form.addEventListener("submit", function (e) {
        const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
        let valid = true;
  
        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.style.borderColor = "red";
          } else {
            input.style.borderColor = "#ccc";
          }
        });
  
        if (!valid) {
          e.preventDefault();
          alert("Please fill in all required fields before submitting.");
        }
      });
    });
  });
  
  // ===== Optional: Dark/Light Mode Toggle Button =====
  const toggleMode = document.createElement("button");
  toggleMode.innerText = "🌓";
  toggleMode.className = "mode-toggle";
  document.body.appendChild(toggleMode);
  
  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  