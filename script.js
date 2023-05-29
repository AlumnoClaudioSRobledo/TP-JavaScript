function calPrecioFinal(){

 //la cantEnt almacenamos la cantidad de entradas que ingreso el usuario
 let cantEnt=document.getElementById("cantEntradas").value;
 console.log("cantEnt : "+cantEnt);

 //en porcDesc almacenamos el porcentaje de descuento que selecciono el usuario
 let porcDesc=document.getElementById("porcDescuento").value;
 console.log("porcDesc : "+porcDesc);

 //en descuento almacenamos los pesos totales a descontar
 let descuento=(cantEnt*200) * porcDesc/100;
 console.log("descuento : "+descuento);

 //en precioTotal esta el valor de las entradas x la cantidad menos el descuento en pesos
 let precioTotal=(cantEnt*200) - descuento;
 console.log("precioTotal : "+precioTotal);

 //modificiando dinámicamente el html para colocar el precio total en la pantalla
 document.getElementById("valorTotal").value=precioTotal;

}