// CLASE 4 - Tarea 3 - Viernes 29 de abril 2022
// Estructura de Control - Selección

// Ejercicio – Descuento Octubre
/*
• Una tienda al cumplir años en Octubre ofrece un 
descuento del 15% a sus clientes en todas sus compras
• Desarrolle un algoritmo que dada una compra: 
precio unitario, cantidad y el mes, indicados por 
el usuario, determine si el cliente tiene descuento o no.
*/

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Indique precio";
rotulo2.innerHTML = "Indique cantidad";
rotulo3.innerHTML = "Indique mes";

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", () => {
  let monto: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let mes: string = Number(dato3.value);

  let precioTotal: number = monto * cantidad;

  if (mes === "Octubre") {
    let descuento: number = (precioTotal * 15) / 100;
    precioTotal -= descuento;
    console.log(
      " Por comprar en el mes de Octubre Ud tiene un 15% de descuento."
    );
  } else {
    console.log("Usted no tiene descuento.");
  }
  console.log("El precio total es ", precioTotal);
});
