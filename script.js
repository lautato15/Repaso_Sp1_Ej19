function encrypt13(str) {
  let array = str.split("");
  for (i = 0; i < array.length; i++) {
    let value = array[i].charCodeAt();
    switch (true) {
      case 65 <= value && value <= 90:
        array[i] =
          value + 13 > 90
            ? String.fromCharCode(value + 13 - 26)
            : String.fromCharCode(value + 13);
        break;
      case 97 <= value && value <= 122:
        array[i] =
          value + 13 > 122
            ? String.fromCharCode(value + 13 - 26)
            : String.fromCharCode(value + 13);
        break;
    }
  }
  return array.join("");
}

// Ejercicio 19
// Crear una función en JavaScript llamada encrypt13 (Encriptar 13) que reciba
// como parámetro un string y retorne como resultado un nuevo string pero
// “encriptado”.
// El nuevo string deberá tener las letras “corridas” 13 lugares. Por ejemplo, a la letra
// “A” le corresponderá la “N”, así como a la “a” le corresponderá la “n”. A la letra “T” le
// corresponderá la “G” y a la letra “t” la “g”. Es decir, las minúsculas se transforman en
// otra letra minúscula y las mayúsculas también se transforman en mayúscula.
// Sólo se deberán transformar (“correr”) letras del alfabeto inglés. Cualquier otro
// carácter deberá quedar incambiado.
// Ejemplos:
// Input ---> Output
// encrypt13("hola") ---> "ubyn"
// encrypt13("CHAU") ---> "PUNH"
// encrypt13("Título") ---> "Gíghyb"
// encrypt13("HACK academy 2022") ---> "UNPX npnqrzl 2022"
