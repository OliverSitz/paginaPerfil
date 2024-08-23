let aceptarButtons = document.querySelectorAll(".aceptar");
let rechazarButtons = document.querySelectorAll(".rechazar");
let solicitudes = document.querySelectorAll(".solicitud");
let contadorElement = document.getElementById("contador");
let conexionesList = document.querySelector(".conexiones ul");
let contadorConexionesElement = document.getElementById("contadorConexiones");
let contador = parseInt(contadorElement.textContent);
let contadorConexiones = parseInt(contadorConexionesElement.textContent);

aceptarButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let solicitud = solicitudes[index];
        let nombre = solicitud.querySelector("p").textContent;
        let imgSrc = solicitud.querySelector("img").src;
        let nuevaConexion = document.createElement("li");
        nuevaConexion.innerHTML = `<img src="${imgSrc}" alt="Conexion nueva"> ${nombre}`;
        conexionesList.appendChild(nuevaConexion);
        solicitud.style.display = "none";
        contador--;
        contadorElement.textContent = contador;
        contadorConexiones++;
        contadorConexionesElement.textContent = contadorConexiones;
    });
});

rechazarButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        solicitudes[index].style.display = "none";
        contador--;
        contadorElement.textContent = contador;
    });
});

let editarPerfilBtn = document.getElementById("editarPerfil");
let nombreUsuario = document.getElementById("nombreUsuario");
editarPerfilBtn.addEventListener("click", () => {
    let nombreActual = nombreUsuario.textContent;
    let nuevoNombre = prompt("Ingresa el nuevo nombre de usuario:", nombreActual);
    if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
        nombreUsuario.textContent = nuevoNombre;
    }
});