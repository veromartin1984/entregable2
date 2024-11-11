/*Encontrar el elemento más grande del arreglo
Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
let numeroMayor:number[]=[4,7,9,3,1,45,67,23,29,78,11,16];
console.log(numeroMayor);
let mayor:number=0;
const longitud:number=numeroMayor.length;
function parImpar(m:number) {
    if(m%2==0){
        console.log("El numero "+m+ " es par.");        
    }else{
        console.log("El numero "+m+ " es impar.");
        
    }
    
}
for(let i:number=0;i<longitud;i++){
        if(mayor<numeroMayor[i]){
            mayor=numeroMayor[i]            
        }  
    }
console.log("El mayor numero del arreglo es: "+ mayor);
parImpar(mayor); 
    
//usando la biblioteca Math, la solucion es:
console.log(Math.max(4,7,9,3,1,45,67,23,29,78,11,16));
