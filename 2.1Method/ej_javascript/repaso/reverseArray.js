
let miArray = [1, 2, 3, 4, 5];

let arrayInvertido = reverseArray(miArray);

function reverseArray(array) {

  for (let i = 0; i < array.length / 2; i++) {

    for (let j = i; j < array.length - i - 1; j++) {

      // Intercambiamos los elementos
      let temp = array[j];

      array[j] = array[array.length - j - 1];

      array[array.length - j - 1] = temp;

    }

  }

  return array;

}

  
console.log(arrayInvertido); // Imprime: [5, 4, 3, 2, 1]
