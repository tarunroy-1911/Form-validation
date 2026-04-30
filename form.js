const form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Clear errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";

  let isValid = true; 

  // Name validation
  if (name.trim() === "") {
    document.getElementById("nameError").innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Email is not valid";
    isValid = false;
  }

  // Password validation
  if (password.length < 10) {
    document.getElementById("passwordError").innerText ="Password must be at least 10 characters";
    isValid = false;
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerText = "Passwords does not match"; 
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
  }
});