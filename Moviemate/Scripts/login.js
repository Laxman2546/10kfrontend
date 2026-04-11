const passwordInput = document.getElementById("password");
const toggleIcon = document.getElementById("togglePassword");
function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/159/159604.png"; // Change to "hide" icon
  } else {
    passwordInput.type = "password";
    toggleIcon.src = "https://cdn-icons-png.flaticon.com/512/159/159604.png"; // Change to "show" icon
  }
}
