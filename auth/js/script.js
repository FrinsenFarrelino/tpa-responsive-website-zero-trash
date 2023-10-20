async function fetchMovies() {
  const response = await fetch("https://65274e41917d673fd76d8e2b.mockapi.io");
  // waits until the request completes...
  console.log(response);
}

fetchMovies();

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", matchedUser.email);

    window.location.href = "/index.html";
  } else {
    alert("Login gagal. Periksa kembali email dan password Anda.");
  }
}

function handleRegister(event) {
  event.preventDefault();

  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const isEmailExists = users.some((user) => user.email === regEmail);

  if (isEmailExists) {
    alert("Email sudah terdaftar. Gunakan email lain.");
  } else {
    users.push({ email: regEmail, password: regPassword });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "/auth/login.html";
  }
}
