function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("msg").innerText = "Fill all fields";
    return;
  }

  document.getElementById("msg").innerText = "Login clicked!";
}
