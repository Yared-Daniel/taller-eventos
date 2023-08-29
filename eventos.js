//function mostrarAlerta() {
    alert("¡Hola!");
//}

// Obtener una referencia al div mediante su ID
const divElement = document.getElementById("miDiv");

// Agregar un manejador de eventos al clic en el div
divElement.addEventListener("click", function() {
  alert("Hola! Soy el div");
});
