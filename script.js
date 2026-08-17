document.getElementById("year").textContent = new Date().getFullYear();

const leadForm = document.getElementById("lead-form");
const formMessage = document.getElementById("form-message");

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  if (!email.validity.valid) {
    formMessage.textContent = "Enter a valid email address.";
    email.focus();
    return;
  }
  formMessage.textContent = "The free-download email form is being connected before launch.";
});

document.querySelectorAll(".checkout-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      link.nextElementSibling.textContent = "Checkout is the final connection required before this page goes live.";
    }
  });
});
