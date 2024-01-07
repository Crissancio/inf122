//DECLARAR VARIABLES
var varGlob = "variable global";
console.log(varGlob);
const varConst = "variable constante";
console.log(varConst);
let varBloque = "variable de bloque";
//Condicional If/Else
if(11===23){
    console.log(true);
} else {
    console.log(false);
}
//Ciclo For
for (let i = 0 ; i<11 ; i++) {
    console.log(i);
}
//Ciclo While
let cont = 0;
while(cont <= 15){
    if(cont/2===0){
        console.log(cont);
    }
    cont++;
}
//Operadores Aritmeticos
const suma = "+";
console.log(suma);
const resta = "-";
console.log(resta);
const multiplicacion = "*";
console.log(multiplicacion);
const division = "/";
console.log(division);
const modulo = "%";
console.log(modulo);
//Comparacion
const mayorQue = ">";
console.log(mayorQue);
const mayorIgualQue = ">=";
console.log(mayorIgualQue);
const menorQue = "<";
console.log(menorQue);
const menorIgualQue = "<=";
console.log(menorIgualQue);
const igualQue = "===";
console.log(igualQue);
const diferenteQue = "!=";
console.log(diferenteQue);
//Logica
const and = "&&";
console.log(and);
const or = "||";
console.log(or);
const not = "!";
console.log(not);
//objeto
const persona = {
    nombre: "The Weekend",
    edad: 33,
    ocupacion: "cantante",
}
    //agregar atributo/propiedad
persona ["apellido"] = "Tesfaye";
    //modificar
persona.nombre = "Abel";
//Array
const memorySena = ["Obstaculos","PaSiempre","Todavia","FANTASMA|AVC","Sci-Fi","Buenos Aires"];
var longitudMemoria = memorySena.length;
memorySena.reverse();
var eliminar = memorySena.pop();
memorySena.push("En Visto");
memorySena.sort();