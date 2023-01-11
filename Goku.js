/*
Entrenamiento de Goku
Goku está entrenando la teletransportación, y Bills ha establecido N ubicaciones donde Goku se debe mover. La ubicación i (1 <= i <= N) se encuentra en la posición arr[i] y Goku utiliza |arr[i] – arr[j]| en ki para moverse de la ubicación i a la ubicación j. Goku posee un nivel de ki de K. Después de cada movimiento, Goku recupera su ki (osea vuelve a tener un nivel de ki de K). Sin embargo, no puede utilizar más ki del nivel que tiene.
Goku es malísimo en hacer operaciones matemáticas, así que te pide ayuda para saber la cantidad de diferentes movimientos que él puede realizar.

Ejemplo: N = 4, k = 3 y arr = [11, 13 , 17, 20]
El puede realizar estos movimientos:
De la ubicación 1 a la ubicación 2 (|11-13| = 2 <= 3)
De la ubicación 2 a la ubicación 1 (|13-11| = 2 <= 3)
De la ubicación 3 a la ubicación 4 (|17-20| = 3 <= 3)
De la ubicación 4 a la ubicación 3 (|20-17| = 3 <= 3)
El número de diferentes movimientos que él puede hacer es 4
Formato de Entrada
La primera línea debe contener 2 enteros separados por espacios: N y K, el tamaño del array arr y el máximo nivel de ki de Goku respectivamente. La segunda línea contiene una lista de N enteros separados por espacio: arr[1], arr[2], … , arr[N-1], arr[N].
Limitaciones
2 <= N <= 10^5
0 <= K <= 10^9
-10^9 <= arr[i] <= 10^9
Formato de salida
Un entero, el número de diferentes movimientos que puede realizar Goku.
 
 
 
Caso de Prueba 1
Entrada
4 3
11 13 17 20

 
Salida Esperada
4

 
 

*/




function goku(pUbicaciones, pKi, pArr) {
	let ubicaciones = pUbicaciones, ki = pKi;
	let datos = pArr;
	let movimientos = 0;
	if(ubicaciones < 2 || ubicaciones > Math.pow(10,5)) {
		console.log("Error el tamaño del array no debe ser menor a 2, ni mayor a 10^5");
		return;
	}
	if(ubicaciones != datos.length) {
		console.log("Error el tamaño enviado es diferente a la cantidad de elementos del array");
		return;
	}
	if(ki < 0 || ki > Math.pow(10,9)) {
		console.log("Error el máximo nivel de ki no debe ser menor a 0, ni mayor a 10^9");
		return;
	}
	for (var i = 0; i < ubicaciones; i++) {
		let itemActual = datos[i];
		for (var j = 0; j < ubicaciones; j++) {
			if(i != j) {
				let itemSiguiente = datos[j];
				if(itemActual < -(Math.pow(10,9)) || itemActual > Math.pow(10,9)) {
					console.log(`Error número ${itemActual} no debe ser menor a -10^9, ni mayor a 10^9`);
					return;
				}
				
				if(itemActual>=itemSiguiente && (itemActual-itemSiguiente)<=ki) {
					movimientos++;
				}
				if(itemSiguiente>=itemActual && (itemSiguiente-itemActual)<=ki) {
					movimientos++;
				}
			}
		}
	}
	console.log(`${movimientos}`);
}

goku(4,3,[11,13,17,20]);



