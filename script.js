function scrollKarusell(direction) {
    const karusell = document.getElementById('karusell');
    const scrollAmount = 310; // Justerer hvor mye det ruller per klikk
    karusell.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

function avisKlikk(url) {
    location.href = url;
}

function switchColor() {
    document.body.classList.toggle("darkmode")
}