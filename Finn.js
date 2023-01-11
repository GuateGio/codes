/*
Finn, el humano
Nuestro héroe de Ooo siempre mantiene la paz y nunca ha sido derrotado, junto a Jake el perro, pudo sumergirse en innumerables batallas. Podríamos decir que nuestro héroe tiene un nivel de batalla P. Si derrota a un villano con un nivel de batalla X, su nivel de batalla nuevo será P + X, osea aumenta su nivel en X.
Luego de haberse librado de Golb en su última batalla, nuestro héroe no quiere tener más riesgos y solo irá a luchar contra un villano si tiene un nivel de batalla menor, dado a que no puede derrotar a villanos con un nivel igual o mayor en poder. Actualmente hay N nuevos villanos y cada uno con un nivel de batalla A[i] (desde i = 1 hasta N) y el nivel de batalla de Finn es de P.

Jake está cerca del envejecimiento, por lo cual solo podrá ayudar a Finn en 1 batalla antes de ir con su familia al reino de Cristal. Cuando Jake le ayuda a Finn, pueden derrotar a villanos que tengan un nivel de batalla menor a (P + J) * 2, donde J es el nivel de batalla de Jake. Si este villano tenía un nivel de batalla X, de igual manera, fin aumenta su nivel de batalla en X, osea su nuevo nivel es de P + X.
Finn es terrible en este tipo de estrategias, por lo cual te pide ayuda para saber si podrá derrotar a todos los villanos para mantener la paz.

Ejemplo: N = 4, P = 2, J = 1 y A= [2, 1 , 11, 15]
Finn puede batallar en este orden:
Villano #2 con nivel de batalla X = 1 y Finn con nivel P = 2, su nuevo nivel es P = 2 + 1 = 3
Villano #1 con nivel de batalla X = 2 y Finn con nivel P = 3, su nuevo nivel es P = 3 + 2 = 5
Villano #3 con nivel de batalla X = 11 y Finn con nivel P = 5, Jake vendrá a ayudarlo y podrán derrotar al villano dado a que ( P + J ) * 2 = ( 5 + 1 ) * 2 = 12 su nuevo nivel es P = 5 + 11 = 16
Villano #4 con nivel de batalla X = 15 y Finn con nivel P = 16, su nuevo nivel es P = 31.
Si podrá derrotar a todos los villanos.
Ejemplo 2: N = 1, P = 2, J = 1 , A = [19]
No hay forma de derrotar al único villano, es muy poderoso.
Formato de Entrada
La primera línea debe contener 3 enteros separados por espacios: N, P y J, el tamaño del array arr y el nivel de Finn y de Jake respectivamente. La segunda línea contiene una lista de N enteros separados por espacio: A[1], A[2], … , A[N-1], A[N], los niveles de los villanos.
Limitaciones
2 <= N <= 10^5
0 <= P, J <= 10^9
-10^9 <= A[i] <= 10^9
Formato de salida
Un string, SI si podría derrotar a todos los villanos, y NO si no puede.
Caso de Prueba 1
Entrada
4 2 1
2 1 11 15

 
Salida Esperada
SI

 
Caso de Prueba 1
Entrada
1 2 1
19

 
Salida Esperada
NO

 
 
 



*/
function humano(pVillanos, pNivelFinn, pNivelJake, pArr) {
	let villanos = pVillanos, nivelFinn = pNivelFinn, nivelJake = pNivelJake;
	let datos = pArr;
	if(villanos < 2 || villanos > Math.pow(10,5)) {
		console.log("Error el tamaño del array no debe ser menor a 2, ni mayor a 10^5");
		return;
	}
	if(villanos != datos.length) {
		console.log("Error el tamaño enviado es diferente a la cantidad de elementos del array");
		return;
	}
	if(nivelFinn < 0 || nivelFinn > Math.pow(10,9)) {
		console.log("Error el nivel de Finn no debe ser menor a 0, ni mayor a 10^9");
		return;
	}
	let nuevoNivelFinn = 0;
	let villanosDerrotados = 0;
	for (var i = 0; i < villanos; i++) {
		let nivelVillano = datos[i];
		if(nivelVillano < -(Math.pow(10,9)) || nivelVillano > Math.pow(10,9)) {
			console.log(`Error nivel de villano ${nivelVillano} no debe ser menor a -10^9, ni mayor a 10^9`);
			return;
		}
		if(nivelVillano < nivelFinn) {
			nivelFinn = nivelFinn + nivelVillano;
			villanosDerrotados++;
		} else if(nivelVillano < ((nivelFinn + nivelJake) * 2)) {
			nivelFinn = nivelFinn + nivelVillano;
			villanosDerrotados++;
		}
	}
	if(villanosDerrotados == villanos) {
		console.log("SI");
	} else {
		console.log("NO");
	}
}

humano(4, 2, 1, [2, 1, 11, 16]);

