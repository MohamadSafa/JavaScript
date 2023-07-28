// JavaScript
const modal = document.getElementById("modal");
const btn = document.getElementById("openBTN");
const span = document.querySelector("#modal .close");

// Open the modal when the button is clicked
btn.addEventListener('click', function() {
  modal.style.display = "block";
});

// Close the modal when the close button inside the modal is clicked
span.onclick = function() {
  modal.style.display = "none";
};

// Close the modal when clicking outside the modal
document.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});