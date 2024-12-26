function checkNumber() {
  const isNomresi = document.getElementById("isNomresi").value;
  const redirectPages = {
    "7450351": "esas.html",
    "8921189": "ayxan.html",
    // Buraya digər kodlar və uyğun faylları əlavə edə bilərsiniz.
  };

  if (isNomresi.length === 7 && !isNaN(isNomresi) && redirectPages[isNomresi]) {
    window.location.href = redirectPages[isNomresi];
  } else {
    alert("Zəhmət olmasa düzgün 7 rəqəmli iş nömrəsini daxil edin!");
  }
}
