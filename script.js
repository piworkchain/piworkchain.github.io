
function toggleLanguage() {
    const langButton = document.querySelector('.lang-toggle');
    const enTexts = document.querySelectorAll('.lang-en');
    const zhTexts = document.querySelectorAll('.lang-zh');
    if (langButton.textContent === "English") {
        langButton.textContent = "中文";
        enTexts.forEach(el => el.style.display = 'none');
        zhTexts.forEach(el => el.style.display = 'block');
    } else {
        langButton.textContent = "English";
        enTexts.forEach(el => el.style.display = 'block');
        zhTexts.forEach(el => el.style.display = 'none');
    }
}
