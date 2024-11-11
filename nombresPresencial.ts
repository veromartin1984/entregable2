import * as rls from "readline-sync";
const nombres:string[]=new Array(5);
const dim=nombres.length;

for (let index = 0; index < dim; index++) {
     const nombre= rls.questionInt(`Nombre ${index}`);
    nombres.push(nombre);
}
const letra:string=rls.questionInt(`Letra: `);
let contador:number=0;
console.log(dim);
