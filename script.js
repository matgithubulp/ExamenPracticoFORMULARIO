function validarFormulario() {
    let pelicula = document.getElementById("pelicula");
    let nombrePelicula = pelicula.value.trim();

    let puntuacion = document.getElementById("puntuacion");
    let valorPuntuacion = puntuacion.value;

    let comentario = document.getElementById("comentario");
    let textoComentario = comentario.value.trim();

    let confirmar = true;

   
    if (nombrePelicula === "" || nombrePelicula.length > 30) {
        document.getElementById('errorPelicula').style.display = 'inline';
        pelicula.classList.add('error-border');
        confirmar = false;
    } else {
        document.getElementById('errorPelicula').style.display = 'none';
        pelicula.classList.remove('error-border');
    }

   
    if (valorPuntuacion === "") {
        document.getElementById('errorPuntuacion').style.display = 'inline';
        puntuacion.classList.add('error-border');
        confirmar = false;
    } else {
        document.getElementById('errorPuntuacion').style.display = 'none';
        puntuacion.classList.remove('error-border');
    }

   
    if (textoComentario !== "" && (textoComentario.length < 10 || textoComentario.length > 200)) {
        document.getElementById('errorComentario').style.display = 'inline';
        comentario.classList.add('error-border');
        confirmar = false;
    } else {
        document.getElementById('errorComentario').style.display = 'none';
        comentario.classList.remove('error-border');
    }

    
    if (confirmar != false) {
        const reseñas = document.getElementById("reseñas");

        const nuevaReseña = document.createElement("div");
        nuevaReseña.className = "reseña";
        
        nuevaReseña.innerHTML = `
            <p><strong>Película:</strong> ${nombrePelicula}</p>
            <p><strong>Puntuación:</strong> ${valorPuntuacion}</p>
            <p><strong>Comentario:</strong> ${textoComentario}</p>
        `;
        
        reseñas.appendChild(nuevaReseña);

        
        pelicula.value = "";
        puntuacion.value = "";
        comentario.value = "";
    }
}