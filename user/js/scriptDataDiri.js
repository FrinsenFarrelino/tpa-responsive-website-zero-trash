// untuk halaman data diri
function loadDataDiri() {
  const personalData = JSON.parse(localStorage.getItem("personalData")) || {};

  document.getElementById("inputTelp").value = personalData.nomorTelp || "";
  document.getElementById("inputTgl").value = personalData.tanggalLahir || "";
  document.getElementById("inputLocation").value =
    personalData.tempatLahir || "";
  document.getElementById("inputAlamat").value = personalData.alamat || "";
}

window.onload = loadDataDiri;

function handleFormSubmitDataDiri(event) {
  event.preventDefault();

  const nomorTelp = document.getElementById("inputTelp").value;
  const tanggalLahir = document.getElementById("inputTgl").value;
  const tempatLahir = document.getElementById("inputLocation").value;
  const alamat = document.getElementById("inputAlamat").value;

  const personalData = {
    nomorTelp: nomorTelp,
    tanggalLahir: tanggalLahir,
    tempatLahir: tempatLahir,
    alamat: alamat,
  };

  localStorage.setItem("personalData", JSON.stringify(personalData));

  alert("Data berhasil disimpan!");
}
