function encontrarMayorEdad() {
    let names = [];
    let ages = [];

    for (var i = 1; i <= 3; i++) {
        let name = parseInt(prompt("Introduce el nombre " + i + "."));
        let age = Number(prompt("Introduce la edad de " + name + "."));
    
        names.push(name);
        ages.push(ages);
    }

    let mayor = ages[0];
    let ind_mayor = 0;

    for (var j = 1; j < ages.length; j++) {
      if (ages[j] > mayor) {
        mayor = ages[j];
        ind_mayor = j;
      }
    }

    let name_mayor = names[ind_mayor];
    let age_mayor = ages[ind_mayor];


    alert("La persona de mayor edad es " + name_mayor + " con " + age_mayor + " años.");
}