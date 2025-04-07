function scrollKarusell(direction) {
    const karusell = document.getElementById('scroll-karusell');
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
        if (el.id != "karusell") {
            el.addEventListener('click', () => {
                location.href = "/" + el.id + ".html";
            });
        }
    });

    if (localStorage.getItem("usn") != undefined) {
        document.querySelector("#loginIcon").style.display = "none";
        
        let bn = document.querySelector("#brukernavn");
        bn.style.display = "block";
        bn.innerHTML = localStorage.getItem("usn");

        bn.addEventListener("click", function() {
            localStorage.removeItem("usn");
            
            let bn = document.querySelector("#brukernavn");
            bn.style.display = "none";
            bn.innerHTML = "";
        
            document.querySelector("#loginIcon").style.display = "block";
        });
    }
}


//oppsumering boks i artikkel
document.addEventListener("DOMContentLoaded", function () { //DOMContentLoaded= laster inn html-en i dokumentet før
    const oppsumeringBoks = document.querySelector(".oppsumering-boks");
    const visMerKnapp = document.querySelector(".vis-mer-knapp");

    visMerKnapp.addEventListener("click", function () {
        oppsumeringBoks.classList.toggle("expanded");
        visMerKnapp.textContent = oppsumeringBoks.classList.contains("expanded")
            ? "Vis mindre"
            : "Vis mer";
    });
});

document.querySelectorAll(".karusell-article").forEach(el => {
    el.addEventListener("click", function() {
        el.querySelector("video").play();
        el.querySelector("span").style.visibility = "hidden";
    })

    el.addEventListener("mouseleave", function() {
        el.querySelector("video").pause();
        el.querySelector("span").style.visibility = "visible";
    })
});

document.querySelector("#form").addEventListener("submit", 
    (e) => {
        e.preventDefault();

        let usn = form.querySelector("#usn");
        //let psw = form.querySelector("#psw");

        localStorage.setItem("usn", usn.value);
        window.location.href = "/";
    }
);
