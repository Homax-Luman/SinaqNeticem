function checkNumber(event) {
    event.preventDefault(); // Formun default davranışını bloklayır

    const isNomresi = document.getElementById("isNomresi").value;

    // Şifrə ilə HTML faylları arasında əlaqə yaradırıq
    const htmlFiles = {
        "7450351": "esas.html",
        "2345678": "file2.html",
        "3456789": "file3.html",
        // Burada yeni şifrə-fayl cütləri əlavə edə bilərsən
    };

    // Şifrə 7 rəqəmlidirsə və rəqəmlərdən ibarətdirsə:
    if (isNomresi.length === 7 && !isNaN(isNomresi)) {
        if (htmlFiles[isNomresi]) {
            window.location.href = htmlFiles[isNomresi];
        } else {
            alert("Bu iş nömrəsi üçün səhifə tapılmadı!");
        }
    } else {
        alert("Zəhmət olmasa düzgün 7 rəqəmli iş nömrəsini daxil edin!");
    }
}
