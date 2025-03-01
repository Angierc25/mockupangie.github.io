document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".caracters2").forEach(feature => {
        feature.addEventListener("click", () => toggleFeature(feature));
    });
});

function toggleFeature(element) {
    document.querySelectorAll(".caracters2").forEach(f => f.classList.remove("active"));
    element.classList.toggle("active");
}


const imgLogos = document.querySelector(".img-logos");
let scrollAmount = 0;

function scrollLogos() {
    scrollAmount -= 0.5; // Ajusta la velocidad aquí
    imgLogos.style.transform = `translateX(${scrollAmount}px)`;

    if (scrollAmount <= -imgLogos.scrollWidth / 15) {
        scrollAmount = 0;
    }
}

setInterval(scrollLogos, 30);
