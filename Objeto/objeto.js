let mercedes = {
    modelo: "G63",  // características - propriedades
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar(){ // comportamentos - métodos
        console.log("Acelerendo...vrum...vrum...");
        
    },
    freiar() {
        console.log("Freiando...");
        
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());



// Criar um objeto professor Tadeu ou Jonas
// 3 propriedades nome, NIF, salario
// 2 comportamentos - atribuirNota e baterPonto
// Além disso, escolha mais uma propriedade e mais um comportamento


let professor = {
    nome: "tadeu",
    nif: 3356789,
    salário: 8.500,
    // baterponto(){
    //    let horarioBatido = new Date(2025, 10, 28, 17, 5)
    //    console.log(horarioBatido);
       
    // },
    baterponto(){
        console.log("Horário Batido");
        
    },

    atribuirNota(){
        console.log("Conferir nota");
        
    }
}; 
console.log(professor.nome);
console.log(professor.salário);


