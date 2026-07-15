// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Contact form validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.getElementById("form-success");

function showError(input, errorElement, show) {
  if (!input || !errorElement) return;

  if (show) {
    input.classList.add("input-error");
    errorElement.classList.remove("hidden");
  } else {
    input.classList.remove("input-error");
    errorElement.classList.add("hidden");
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form && nameInput && emailInput && messageInput && successMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    successMessage.classList.add("hidden");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    const nameValid = nameInput.value.trim() !== "";
    const emailValid = isValidEmail(emailInput.value.trim());
    const messageValid = messageInput.value.trim() !== "";

    showError(nameInput, nameError, !nameValid);
    showError(emailInput, emailError, !emailValid);
    showError(messageInput, messageError, !messageValid);

    if (nameValid && emailValid && messageValid) {
      form.reset();
      successMessage.classList.remove("hidden");
    }
  });
}