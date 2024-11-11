/*Ejercicio – Dos Arreglos
• Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario.
• Al final debe imprimir los valores por consola.*/
import * as rds from "readline-sync";
let arregloNombres:string[]=new Array (2);
let arregloNum:number[]= new Array(3);
arregloNombres[0]=rds.question("Ingrese un nombre ");
arregloNombres[1]=rds.question("Ingrese otro nombre: ");
arregloNum[0]=rds.questionInt("Ingrese un numero: ");
arregloNum[1]=rds.questionInt("Ingrese un numero: ");
arregloNum[2]=rds.questionInt("Ingrese un numero: ");
console.log("Los nombres ingresados son: "+ arregloNombres[0]+" y "+ arregloNombres[1]);
console.log("Los numeros ingresados son: "+ arregloNum[0]+ ", "+arregloNum[1]+ " y "+arregloNum[2]);

