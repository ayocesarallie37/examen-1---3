function obtenerNombreMayor() {
  let nombres = [];
  let edades = [];

  // Pedir al usuario que ingrese los nombres y las edades
  for (let i = 0; i < 3; i++) {
    let nombre = prompt(`Ingresa el nombre ${i + 1}:`);
    let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`));

    nombres.push(nombre);
    edades.push(edad);
  }

  // Encontrar la mayor edad
  let mayorEdad = Math.max(...edades);
  let indiceMayor = edades.indexOf(mayorEdad);

  // Obtener el nombre correspondiente a la mayor edad
  let nombreMayor = nombres[indiceMayor];

  // Mostrar el nombre del mayor
  alert(`El nombre del mayor es: ${nombreMayor}`);
}

// Llamar a la función para ejecutar el programa
obtenerNombreMayor();