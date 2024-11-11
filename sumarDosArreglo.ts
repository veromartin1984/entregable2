/*Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/
import * as rls from "readline-sync";
let parametroFuncion:number=0;
let arregloA:number[]=new Array(6);
let arregloB:number[]=new Array(6);
let arregloSumaAB:number[]=new Array(6);


for (let i:number=0 ; i < 6; i++) {
    arregloA[i]=rls.questionInt("Ingrese un valor para la posicion "+i+" del arreglo A : ");
    arregloB[i]=rls.questionInt("Ingrese un valor para la posicion "+i+" del arreglo B: ");
    arregloSumaAB[i]=arregloA[i]+arregloB[i]
    
    
}

console.log(arregloA);
console.log(arregloB);
console.log(arregloSumaAB);




