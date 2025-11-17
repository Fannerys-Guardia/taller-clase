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

//Ejercicio 12
// Pedir el precio base (sin IVA)
let precioBase = Number(prompt("Ingrese el precio base del producto (sin IVA):"));

//Definir el IVA como un decimal. 19% se escribe como 0.19.
let tasaIVA = 0.19;

//Calcular el monto del IVA (Precio Base * Tasa IVA).
let montoIVA = precioBase * tasaIVA;

//Calcular el precio total (Precio Base + Monto IVA).
let precioTotal = precioBase + montoIVA;

// Mostrar ambos resultados.
console.log("El monto del IVA (19%) es: $" + montoIVA.toFixed(2));
console.log("El precio total (con IVA) es: $" + precioTotal.toFixed(2));