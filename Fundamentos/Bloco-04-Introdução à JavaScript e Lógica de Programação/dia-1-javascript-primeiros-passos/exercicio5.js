//Switch e case

const notaCandidato = 55;
let estadoCandidato = "";

if(notaCandidato >= 80){
    estadoCandidato="Aprovado!"
    console.log("Aprovado!")
}else if(notaCandidato > 80 < 60){
    estadoCandidato="Voce esta na lista de espera"
    console.log("Voce esta na lista de espera")
}else{
    estadoCandidato="Reprovado"
    console.log("Reprovado")
}

switch (estadoCandidato) {
    case "Aprovado!":
        console.log("Aprovada");
        break;

    case "Voce esta na lista de espera":
        console.log("lista");
        break;

    case "Reprovado":
        console.log("Reprovada");
        break;
    
    default:
        console.log("Nao se aplica")
}