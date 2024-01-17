document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  alert("Email: " + email + "\nPassword: " + password);
});
