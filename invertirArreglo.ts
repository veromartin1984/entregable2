/*Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/
import * as rls from "readline-sync"
const longitud:number=rls.questionInt("Ingrese la longitud del arreglo: ");
let arregloInvertido:number[]=new Array(longitud);
for (let i:number= 0; i< longitud; i++) {
    arregloInvertido[i]=rls.questionInt("Ingrese el valor para la posicion "+i+" del arreglo: ");
    }
for(let i:number=longitud;i>=0;i--){
    console.log(arregloInvertido[i]);
    
}