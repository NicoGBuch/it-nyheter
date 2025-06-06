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

    try {
        document.querySelectorAll("article").forEach(el => {
            if (el.id != "karusell") {
                el.addEventListener('click', () => {
                    location.href = "/" + el.id + ".html";
                });
            }
        });
    } catch (err) {}

    if (localStorage.getItem("usn") != undefined) {
        document.querySelector("#loginIcon").style.display = "none";

        let bn = document.querySelector("#brukernavn");
        bn.style.display = "block";
        bn.innerHTML = localStorage.getItem("usn");

        bn.addEventListener("click", function () {
            localStorage.removeItem("usn");

            let bn = document.querySelector("#brukernavn");
            bn.style.display = "none";
            bn.innerHTML = "";

            document.querySelector("#loginIcon").style.display = "block";
        });
    }

    try {
        document.querySelector("#form").addEventListener("submit",
            (evt) => {
                evt.preventDefault();

                let usn = form.querySelector("#usn");
                //let psw = form.querySelector("#psw");

                localStorage.setItem("usn", usn.value);
                window.location.href = "/";
            }
        );
    } catch (err) {}

    try {
        let i = 0;
        let tipsForm = document.querySelector("#tipsForm");
        tipsForm.addEventListener("submit",
            (evt) => {
                evt.preventDefault();

                if (i == 0) {
                    i = 1;
                    document.querySelector("#progressBar").style.display = "block";
                    var elem = document.querySelector("#progressBar > div");
                    var width = 0;
                    setTimeout(frame, randomNum());
                    function frame() {
                        if (width >= 100) {
                            i = 0;
                            setTimeout(() => { tipsForm.submit(); }, 500);
                        } else {
                            width++;
                            elem.style.width = width + "%";
                            elem.innerHTML = width + "%";
                            setTimeout(frame, randomNum());
                        }
                    }
                    function randomNum() {
                        return 8+(2+Math.sin(width*0.3)+Math.sin(width*0.8))*2;
                    }
                }
            }
        );
    } catch (err) {}
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
    el.addEventListener("click", function () {
        el.querySelector("video").play();
        el.querySelector("span").style.visibility = "hidden";
    })

    el.addEventListener("mouseleave", function () {
        el.querySelector("video").pause();
        el.querySelector("span").style.visibility = "visible";
    })
});
