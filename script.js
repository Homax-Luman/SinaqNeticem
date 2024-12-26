function checkNumber() {
  const isNomresi = document.getElementById("isNomresi").value;
  if (isNomresi.length === 7 && !isNaN(isNomresi)) {
    window.location.href = "index.html";
  } else {
    alert("Zəhmət olmasa düzgün 7 rəqəmli iş nömrəsini daxil edin!");
  }
}
