var arrayExample = [1, 2, 3, 4, 5];


/* ++++++++++ Crea tu propia función forEach que funcione igual a Array.forEach. +++++++++ */
function miForEach(array, callback) {
  var newArray = [];
  for (var i = 0; i < arrayExample.length; i++) {
    newArray.push(arrayExample[i]);
  }
  console.log(newArray);
}

miForEach(arrayExample, function(item) {
  console.log(item);
});



/* ++++++++++ Crea tu propia función map que funcione igual a Array.map. +++++++++ */
function miMap(array, callback) {
  var newArrayMap = [];
  for (var i = 0; i < arrayExample.length; i++) {
    newArrayMap.push(arrayExample[i] * 2);
  }
  console.log(newArrayMap);
}

miMap(arrayExample, function(item) {
  console.log(item);
});



/* ++++++++++ Crea tu propia función filter que funcione igual a Array.filter. +++++++++ */
function miFilter(array, filter) {
  var newArrayPar = [];
  var newArrayImpar = [];

  for (var i = 0; i < arrayExample.length; i++) {
    if (arrayExample[i] % 2 == 0) {
      newArrayPar.push(arrayExample[i]);
    } else {
      newArrayImpar.push(arrayExample[i]);
    }
  }
  console.log("El arreglo Par es: " + newArrayPar);
  console.log("El arreglo Impar es: " + newArrayImpar);
}

miFilter(arrayExample, function(item) {
  console.log(item);
});



/* ++++++++++ Crea tu propia función reduce que funcione igual a Array.reduce. +++++++++ */
function miReduce(array, reduce) {
  var totalReduce = 0;
  for (var i = 0; i < arrayExample.length; i++) {
    totalReduce = totalReduce + arrayExample[i];
  }
  console.log("El total del los elementos es: " + totalReduce);
}

miReduce(arrayExample, function(item) {
  console.log(item);
});


/* ++++++++++ Crea tu propia función sort que funcione igual a Array.sort. +++++++++ */

var arrayExample2 = [20,10,5,25,15,30];

function miSort(array, callback){
  for (var i = 0; i < arrayExample2.length; i++) {
    console.log(arrayExample2[i]);
  }

}

miSort(arrayExample2, function(item) {
  console.log(item);
});
