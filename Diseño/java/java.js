function login() {
    // Obtenemos los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const contra = document.getElementById("contra").value;

    // Almacenamos los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    localStorage.setItem("contraseña", contra);

    const mensaje = document.getElementById("mensajes");
    
    if (nombre === '' || email === '' || contra === '') {
        // Mostrar mensaje en el elemento <p>
        mensaje.textContent = "Debes rellenar todos los campos.";
    } else {
        // Redireccionamos al usuario a la página de ingreso en la misma pestaña
        window.location.href = "perfil.html";
    }
}