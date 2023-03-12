// Variables

// Functions

// Shortcut for selecting element by ids
function r_e(id) {
  return document.querySelector(`#${id}`);
}

// Start Sign Up Functions
// user clicks the button, display the modal
r_e("signUpBtn").addEventListener("click", () => {
  r_e("signUpModal").classList.add("is-active");
});
// End Sign Up Functions
