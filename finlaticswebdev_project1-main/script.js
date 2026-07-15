// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Contact form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("form-success");

function showError(inputId, errorId, show) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  if (show) {
    input.classList.add("input-error");
    error.classList.remove("hidden");
  } else {
    input.classList.remove("input-error");
    error.classList.add("hidden");
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.classList.add("hidden");

  const nameValid = nameInput.value.trim() !== "";
  const emailValid = isValidEmail(emailInput.value.trim());
  const messageValid = messageInput.value.trim() !== "";

  showError("name", "name-error", !nameValid);
  showError("email", "email-error", !emailValid);
  showError("message", "message-error", !messageValid);

  if (nameValid && emailValid && messageValid) {
    form.reset();
    successMessage.classList.remove("hidden");
  }
});
