//Atrelando o evento click ao elemento h2
const h2Element = document.getElementById("titulo");

h2Element.addEventListener("click", ()=>{
    //Math função matemática...
    //Os metódos floor, round e ceil eles arredondam os números passados.
    //O método randon retorna um número entre 0 e 1. Ex: 0.1233.
    let r = "";
    let g = "";
    let b = "";

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    h2Element.textContent = "Novo título";
    //h2Element.setAttribute("style", "color:rgb(rgb"+r+","+g+","+b+");")
    h2Element.setAttribute("style", `color:rgb(${r},${g},${b});`)
});


//DIFERENÇA ENTRE VAR/LET/CONST

//Var desconsidera qualquer escopo, FOR, IF, ELSE, etc... ou seja, o var ignora e vai transformar o nome independente do que aconteça
var nome1 = "Mariana";

// let respeita o escopo e a ordem.
if(nome != ""){
    let nome = "Leonardo";
}

//A constante não se altera, diferente da variável, daí os nomes.
//1º regra - não se pode alterar o conteudo de uma constante no fluxo de um programa
//2º regra - deve-se declarar ai inicializar a constante 
//const PI = 3.14


// mechendo com arrays
let fruta = "melão";
console.log(fruta);


let frutas = ["uva", "melância", "pêra"];
console.log(frutas);

//ler a quantidade de itens
console.log(frutas.length);

//adicionar itens
frutas.push("banana");
frutas.push("Laranja");
console.table(frutas);

//removeer o último item
frutas.pop();
console.table(frutas);

//remover o primeiro item
frutas.shift();
console.table(frutas);

//adicionar elementos no início do array
frutas.unshift("kiwi");
console.table(frutas);

//procurar num índice do array
// let indice = frutas.indexOf("pêra");
// console.log(indice);

//Removendo item através do índice do array com método splice(indice, qtd)
let indice = frutas.indexOf("pêra");
frutas.splice(indice, 1);
console.table(frutas);

//substituindo com replace
