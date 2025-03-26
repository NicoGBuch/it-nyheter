
document.querySelectorAll("article").forEach(el => {
    el.addEventListener('click', () => {
        location.href = "/" + el.id + ".html";
    });
});
