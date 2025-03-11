// Lista de favoritos en memoria
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

// Función para marcar/desmarcar favoritos
function toggleFavorito(id) {
    const heart = document.querySelector(`.photo-card[data-id="${id}"] .heart`);

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(fav => fav !== id);
        heart.classList.remove("active");
    } else {
        favoritos.push(id);
        heart.classList.add("active");
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// Cargar favoritos al iniciar
window.onload = function () {
    favoritos.forEach(id => {
        const heart = document.querySelector(`.photo-card[data-id="${id}"] .heart`);
        if (heart) heart.classList.add("active");
    });
};
function Verfavoritos() {
    window.location.href = "favoritos.html"; // Redirige a la página de favoritos
}

// Aquí puedes hacer que los datos sean dinámicos con una API
document.addEventListener("DOMContentLoaded", function () {
    console.log("Indicadores cargados correctamente.");
    // Puedes hacer una petición a una API aquí si lo deseas
});


// JavaScript Document