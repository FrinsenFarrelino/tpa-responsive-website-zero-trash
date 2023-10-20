// Untuk halaman profile
function loadData() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};

  document.getElementById("namaDepan").value = userData.namaDepan || "";
  document.getElementById("namaBelakang").value = userData.namaBelakang || "";
}

window.onload = loadData;

function handleFormSubmit(event) {
  event.preventDefault();

  const namaDepan = document.getElementById("namaDepan").value;
  const namaBelakang = document.getElementById("namaBelakang").value;

  const userData = {
    namaDepan: namaDepan,
    namaBelakang: namaBelakang,
  };

  const existingData = JSON.parse(localStorage.getItem("userData")) || {};

  const newData = { ...existingData, ...userData };

  localStorage.setItem("userData", JSON.stringify(newData));

  alert("Data berhasil disimpan!");
}
