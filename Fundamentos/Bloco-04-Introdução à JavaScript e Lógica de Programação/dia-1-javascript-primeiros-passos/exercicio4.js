const currentHour = 22;
let message = "";

if(currentHour >= 22){
    console.log("Nao deveriamos comer nada, e hora de dormir");
}else if(currentHour >= 18 && currentHour < 22){
    console.log("Rango da noite, vamos jantar :D");
}else if(currentHour >= 14 && currentHour < 18){
    console.log("Vamos fazer um bolo pro cafe da tarde?");
}else if(currentHour <11 && currentHour >14 ){
    console.log("Hora do Almoco!!");
}else if(currentHour<4 && currentHour >11){
    console.log("Hmmmmm, cheiro de cafe recem passado")
}
