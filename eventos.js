// Obtener una referencia al div mediante su ID
const divElement = document.getElementById("miDiv"); //Para el div
const bottonSaludo = document.getElementById("btnSaludo") // directamente al botton Saludar

// Agregar un manejador de eventos al clic en el div
/*divElement.addEventListener("click", function() {   
  alert("Hola! Soy el div");
}); */

bottonSaludo.addEventListener("click", function() {   
    alert("Hola! Soy el div");
  });
  