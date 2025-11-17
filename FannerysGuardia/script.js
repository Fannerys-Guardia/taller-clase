// Ejercicio 1: Total de la compra

// Pedir los precios
// let productoUno = Number (prompt ("Ingrese el precio del productoUno:"));
// let productoDos = Number (prompt("Ingrese el precio del productoDos:"));
// let productoTres = Number (prompt("Ingrese el precio del productoTres:"));

//Calcular elmonto
// let totalCompra = (productoUno + productoDos + productoTres);
// console.log("El total a pagar por los 3 productos es : " + totalCompra);

//   Ejercicio 2 Banner

//Pide el ancho y el alto en metros
// let anchoPared = Number(prompt("Ingrese el ancho de la pared:"));
// let altoPared = Number(prompt("Ingrese el largo de la pared"));

//Calcula su área
// let totalMaterial = (anchoPared * altoPared);
// console.log("El área del banner es: " + totalMaterial);

//Ejercicio 3

//Pedir el largo y ancho del potrero
// let largoPotrero = Number(prompt("Ingrese el largo del potrero"));
// let anchoPotrero = Number(prompt("Ingrese el ancho del potrero"));

// //Calcular perimetro
// let totalPerimetro = 2 * (largoPotrero + anchoPotrero);
// console.log("El perimetro del potrero es:" + totalPerimetro);

//Ejercicio 4

// pido la temperatura en F°
// let temFahrenheit = Number(prompt("Ingrese la temperatura en grados Fahrenheit (°F):"));

// //Convierto la temperatura a grados Celsius
// let tempCelsius = (temFahrenheit - 32) * 5 / 9;
// console.log("La temperatura en grados Celsius es:" + tempCelsius + "°C");

// EJERCICIO 5

//Pido el añode nacimiento
// let añoNacimiento = Number(prompt("Diga su año denacimiento"));
// let añoActual = 2024

// //Calculo la edad
// let edad = (añoActual - añoNacimiento);

// console.log("Tienes " + edad + " años");

//Ejercicio 6

//Saludar
// let saludo = prompt("Estimado cliente, como estás eldía de hoy")

//  Pedir elnombre y apellido
// let nombre = prompt("Por favor dime tu nombre y apellido");

// Mostrar
// console.log("Bienvenido, " + nombre);

//Ejercicio 7
//Pido las 3 notas
// let nota1 = parseFloat(prompt("Ingrese nota 1 (0 a 5):"));
// let nota2 = parseFloat(prompt("Ingrese nota 2 (0 a 5):"));
// let nota3 = parseFloat(prompt("Ingrese nota 3 (0 a 5):"));

// let promedio = (nota1 + nota2 + nota3) / 3;

// console.log("Elpromedio fanal es " + promedio);

// Ejercicio 8
////  Pido elnumero de horas
// let numHoras = Number(prompt("Ingrese el numero de horas trabajadas"))
////calculo el slaario semanal
// let valHora = Number(prompt("Ingrese elvalor dela hora"))
// let Salsemanal = (numHoras * valHora)
// console.log("Tu salario semanal es $" + Salsemanal + " pesos");

// // Ejercicio 9
// //Pido la distancia en millas
// let distanciaMillas = Number(prompt("Ingrese la distancia en millas"));
// //pongo a cuanto equivale
// let factorKm = 1.60934;
// //Calculo la distancia en Kilometros
// let distanciaKm = distanciaMillas * factorKm;
// console.log(distanciaMillas + " millas equivalen a " + distanciaKm.toFixed(2) + " kilometros.");

// // Ejercicio 10
// // Pedir el total de minutos.
// let totalMinutos = Number(prompt("Ingrese un total de minutos:"));

// // Calcular las horas enteras. Dividimos por 60 (minutos en una hora) y quitamos los decimales con Math.floor.
// let horas = Math.floor(totalMinutos / 60);

// // Calcular los minutos restantes. Usamos el operador % para saber lo que "sobró" de la división.
// let minutosRestantes = totalMinutos % 60;

// // Mostrar el resultado.
// console.log(totalMinutos + " minutos son: " + horas + " horas y " + minutosRestantes + " minutos.");

// //Ejercicio 11
// // Pedir el precio original.
// let precioOriginal = Number(prompt("Ingrese el precio original del producto:"));

// //Pedir el porcentaje de descuento (ej. 20).
// let porcentajeDescuento = Number(prompt("Ingrese el porcentaje de descuento (ej. 20):"));

// // Paso 3: Calcular cuánto es el descuento en dinero.
// // Para calcular un porcentaje (ej. 20%), siempre se divide por 100 y luego se multiplica por el precio.
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

// // Calcular el precio final (Precio Original - Monto de Descuento).
// let precioFinal = precioOriginal - montoDescuento;

// //Mostrar el resultado, usando toFixed(2) para que se vea como dinero.
// console.log("El precio final a pagar es: $" + precioFinal.toFixed(2));

// //Ejercicio 12
// // Pedir el precio base (sin IVA)
// let precioBase = Number(prompt("Ingrese el precio base del producto (sin IVA):"));

// //Definir el IVA como un decimal. 19% se escribe como 0.19.
// let tasaIVA = 0.19;

// //Calcular el monto del IVA (Precio Base * Tasa IVA).
// let montoIVA = precioBase * tasaIVA;

// //Calcular el precio total (Precio Base + Monto IVA).
// let precioTotal = precioBase + montoIVA;

// // Mostrar ambos resultados.
// console.log("El monto del IVA (19%) es: $" + montoIVA.toFixed(2));
// console.log("El precio total (con IVA) es: $" + precioTotal.toFixed(2));

// //Ejercicio 13
// // Pedir el capital inicial.
// let capitalInicial = Number(prompt("Ingrese el capital inicial de la inversión:"));

// //Pedir la tasa de interés anual (ej. 5 para 5%).
// let tasaInteres = Number(prompt("Ingrese la tasa de interés anual (ej. 5 para 5%):"));

// //Pedir el número de años.
// let numeroAnos = Number(prompt("Ingrese el número de años:"));

// // Calcular el interés simple.
// // La fórmula es: Capital * (Tasa/100) * Años.
// // se divide la tasa por 100 para convertir el porcentaje a un número decimal (ej. 5% -> 0.05).
// let interesSimple = capitalInicial * (tasaInteres / 100) * numeroAnos;

// //Calcular el capital final (Capital Inicial + Interés Ganado).
// let capitalFinal = capitalInicial + interesSimple;

// // Mostrar el resultado final.
// console.log("El interés ganado es: $" + interesSimple.toFixed(2));
// console.log("El capital final será: $" + capitalFinal.toFixed(2));

// // Ejercicio 14
// //Pido la base del triangulo
// let baseTriangulo = Number(prompt("Ingrese la base deltriangulo:"));
// //Pido laalturadel triangulo
// let alturaTriangulo = Number(prompt("Ingrese la altura del triangulo:"));
// //Calculo el area
// let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// //Imprimo el area
// console.log("El area del triangulo es: " + areaTriangulo.toFixed(2));

// // Ejercicio 15
// //Pedir el nombre y el apellido.
// let nombre = prompt("Ingrese el nombre:");
// let apellido = prompt("Ingrese el apellido:");


// // Usar una variable temporal (temp) para guardar el nombre original.
// let temp = nombre;

// // Poner el valor de 'apellido' en 'nombre'.
// nombre = apellido;

// //Poner el valor original del nombre (que está en 'temp') en 'apellido'.
// apellido = temp;

// //Mostrar los datos intercambiados.
// console.log("Datos Intercambiados: Nombre: " + nombre + ", Apellido: " + apellido);

// // Ejercicio 16
// // Pedir la cantidad en dólares (USD).
// let cantidadUSD = Number(prompt("Ingrese la cantidad en dólares (USD) a convertir:"));

// //Definir la tasa de cambio fija.
// let tasaCambio = 3900; // Asumimos 1 USD = 3900 COP

// //Calcular el equivalente en pesos (USD * Tasa de Cambio).
// let cantidadCOP = cantidadUSD * tasaCambio;

// //Mostrar el resultado.
// console.log(cantidadUSD + " USD equivalen a " + cantidadCOP + " COP (Pesos Colombianos).");

// // Ejercicio 17
// // Pedir el peso en libras.
// let pesoLibras = Number(prompt("Ingrese el peso del paquete en libras (lb):"));

// //Definir el factor de conversión.
// let factorKg = 0.453592;

// //Calcular el peso en kilogramos (Libras * Factor).
// let pesoKilogramos = pesoLibras * factorKg;

// // Mostrar el resultado, usando toFixed(3) para tres decimales.
// console.log(pesoLibras + " libras equivalen a " + pesoKilogramos.toFixed(3) + " kilogramos (kg).");


// //Ejercicio 18
// //Pedir el número de dos cifras.
// let numeroDosCifras = Number(prompt("Ingrese un número de dos cifras (ej. 47):"));

// // Obtener la primera cifra (Decena).
// // 47 / 10 = 4.7 -> Math.floor lo deja en 4.
// let cifraDecena = Math.floor(numeroDosCifras / 10);

// //Obtener la segunda cifra (Unidad).
// // 47 % 10 = 7 (el residuo).
// let cifraUnidad = numeroDosCifras % 10;

// //Calcular la suma.
// let sumaDigitos = cifraDecena + cifraUnidad;

// //Mostrar el resultado.
// console.log("La suma de los dígitos es: " + sumaDigitos);

// //Ejercicio 19
// //Pedir el número de asistentes.
// let numeroAsistentes = Number(prompt("Ingrese el número de asistentes al evento:"));

// //Definir el consumo fijo por persona.
// let refrescosPorPersona = 3;

// //Calcular el total de refrescos (multiplicación simple).
// let totalRefrescos = numeroAsistentes * refrescosPorPersona;

// //Mostrar el resultado.
// console.log("Se necesitan un total de " + totalRefrescos + " refrescos.");

//Ejercicio 20
// Pedir la distancia recorrida en kilómetros.
let distanciaKm = Number(prompt("Ingrese la distancia recorrida (en km):"));

// Pedir el tiempo que tomó en horas.
let tiempoHoras = Number(prompt("Ingrese el tiempo que le tomó (en horas):"));

//Calcular la velocidad promedio.
let velocidadPromedio = distanciaKm / tiempoHoras;

//Mostrar el resultado en km/h.
console.log("La velocidad promedio del auto fue de " + velocidadPromedio.toFixed(2) + " km/h.");