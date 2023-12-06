document.addEventListener('DOMContentLoaded', function () {
    // Mostrar el mensaje "Top Secret" al cargar la página
    mostrarMensajeSecreto();
  });
  
  function mostrarMensajeSecreto() {
    var mensajeSecreto = document.getElementById('mensaje-secreto');
    mensajeSecreto.style.display = 'block';
  }
  
  function ocultarMensajeSecreto() {
    var mensajeSecreto = document.getElementById('mensaje-secreto');
    mensajeSecreto.style.display = 'none';
  }
  
  function mostrarContenido(indice) {
    // Ocultar el mensaje "Top Secret"
    ocultarMensajeSecreto();
  
    // Ocultar todos los contenidos
    var contenidos = document.querySelectorAll('.contenido-pestaña');
    contenidos.forEach(function (contenido) {
      contenido.classList.remove('activo');
    });
  
    // Mostrar el contenido de la pestaña seleccionada
    var contenidoSeleccionado = document.getElementById('contenido' + (indice + 1));
    contenidoSeleccionado.classList.add('activo');
  }
  