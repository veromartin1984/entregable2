/*Ejercicio – Suma Elementos Arreglo

• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario*/
 
import * as rds from "readline-sync";
const  n:number=rds.questionInt("Ingrese la dimension del arreglo");
let acumulador:number=0;
let arregloSumaElementos:number[]=new Array (n);
for(let i:number=0; i<n;i++){
    arregloSumaElementos[i]=rds.questionInt("Indique el valor para la posicion "+i+" del arreglo: ");   
    acumulador=acumulador+arregloSumaElementos[i];
}
console.log("La suma de todos los elementos es: "+ acumulador);
/*const array1 = [1, 2, 3, 4];

 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10*/
