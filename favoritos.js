// Cargar trabajos favoritos desde localStorage
window.onload = function () {
    const favoritosContainer = document.getElementById("favoritos-container");
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = "<p>No tienes trabajos guardados como favoritos.</p>";
        return;
    }

    favoritos.forEach(id => {
        // Simulación de datos (puedes cambiar esto por datos reales)
        const trabajo = document.createElement("div");
        trabajo.classList.add("photo-card");
        trabajo.innerHTML = `
            <img src="ruta-imagen-${id}.jpg" alt="Trabajo ${id}">
            <p>Trabajo ID: ${id}</p>
        `;
        favoritosContainer.appendChild(trabajo);
    });
};
// JavaScript Document