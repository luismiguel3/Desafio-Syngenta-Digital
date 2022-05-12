

function tokeniza(nome){
    let nome_div = nome.split(" ");
    return nome_div;
}



function menor_valor(a,b,c)
{
    let menor = Math.min(a,b,c);
    if(menor == c) return "Ridgewood";
    if(menor == b) return "Bridgewood";
    return "Lakewood";
}

function pega_dia_semana(nome)
{
    var entre_parent = /\(([^)]+)\)/;
    var matches = Array()
    for(let i=1; i<nome.length; i++){
        matches[i-1] = entre_parent.exec(nome[i])[1];
    }
    return matches;
}


function calcula(cliente,dia){  
    var a = 0,b = 0,c = 0;
    if(cliente.match("Regular")){
        dia.forEach(soma_regular);

        function soma_regular(dia){
            if(dia == "sun" || dia =="sat"){
                a += 90;
                b += 60;
                c += 150;
            } else {
                a += 110;
                b += 160;
                c += 220;
            }
        }

    } else {
        dia.forEach(soma_reward);

        function soma_reward(dia){
            if(dia == "sun" || dia =="sat"){
                a += 80;
                b += 50;
                c += 40;
            } else {
                a += 80;
                b += 110;
                c += 100;
            }
        }

    }
    return [a,b,c]
}

function getCheapestHotel(input)
{
    var dividido = tokeniza(input)
    var dia = pega_dia_semana(dividido)
    var [a,b,c] = calcula(dividido[0],dia)

    return menor_valor(a,b,c)

}

console.log(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"))
exports.getCheapestHotel = getCheapestHotel




