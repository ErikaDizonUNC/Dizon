function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check credentials (this is a simple example, not secure for real-world use)
  if (username === "user" && password === "pass") {
      alert("Login successful!");
  } else {
      alert("Invalid credentials. Please try again.");
  }
}
