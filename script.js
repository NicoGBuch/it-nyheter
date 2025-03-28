function scrollKarusell(direction) {
    const karusell = document.getElementById('karusell');
    const scrollAmount = 310; // Justerer hvor mye det ruller per klikk
    karusell.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function avisKlikk(url) {
    location.href = url;
}

function switchColor() {
    const wasDarkMode = localStorage.getItem("darkmode") === "true";
    localStorage.setItem("darkmode", !wasDarkMode);
    const bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("darkmode", !wasDarkMode);

    const themeIcon = document.getElementById("theme-icon");
    if (bodyElement.classList.contains('darkmode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

function onload() {
    const isDarkMode = localStorage.getItem("darkmode") === "true";
    const bodyElement = document.body;

    bodyElement.classList.toggle("darkmode", isDarkMode);

    const themeIcon = document.getElementById("theme-icon");
    if (isDarkMode) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    document.querySelectorAll("article").forEach(el => {
        if (el.id != "karusellArticle") {
            el.addEventListener('click', () => {
                location.href = "/" + el.id + ".html";
            });
        }
    });
}