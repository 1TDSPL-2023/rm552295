

function insereNumero(botao,visor) {

    const meuBotao = document.getElementById(botao);
    const meuVisor = document.getElementById(visor);

    meuVisor.value += meuBotao.value;

}

function resultado(visor) {
    const meuVisor = document.getElementById(visor);
 
    let armazenadorDeNumeros = [];
 
    let novoVisorSemSimbolos = meuVisor.value.split("+");
 
    armazenadorDeNumeros = [...novoVisorSemSimbolos];
 
    console.log(novoVisorSemSimbolos);
 
    let total = 0;
 
    armazenadorDeNumeros.forEach((nr)=>{
        total +=  parseInt(nr);
    });
    console.log(total);
}