  const persona1 = prompt('Ingrese el nombre de la Persona 1:');
  const edad1 = parseInt(prompt(`Ingrese la edad de ${persona1}:`));

  const persona2 = prompt('Ingrese el nombre de la Persona 2:');
  const edad2 = parseInt(prompt(`Ingrese la edad de ${persona2}:`));

  const persona3 = prompt('Ingrese el nombre de la Persona 3:');
  const edad3 = parseInt(prompt(`Ingrese la edad de ${persona3}:`));

  let resul = '';

  if (edad1 > edad2 && edad1 > edad3) {
    resul = 'La ${persona1} es la o el mayor.';
  } else if (edad2 > edad1 && edad2 > edad3) {
    resul = 'La ${persona2} es la o el mayor.';
  } else if (edad3 > edad1 && edad3 > edad2) {
    resul = '${persona3} es la o el mayor.';
  } else {
    resul = 'Hay dos personas con la misma edad.';
  }

  document.getElementById('edadMax').innerText = resul;