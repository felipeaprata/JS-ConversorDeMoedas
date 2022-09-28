var valorMoedas = {
    dolar: 5.38,
    libra: 5.78,
    euro: 5.16,
    iene: 26.97,
}

function calcularMoedas() {
    var real = document.getElementById("valorReal").value;
    var tipoMoeda = document.getElementsByName('moeda');
    var nomeMoeda = '';
    var resultado = 0;

    for (x = 0; x < tipoMoeda.length; x++) {
        if (tipoMoeda[x].checked) {
            nomeMoeda = tipoMoeda[x].value;
        }
    }

    resultado = real * valorMoedas[nomeMoeda];

    switch (nomeMoeda) {
        case "dolar":
            document.getElementById('resultado').innerHTML = 'US$ '+resultado.toFixed(2);
            break;
        case "libra":
            document.getElementById('resultado').innerHTML = "£ "+resultado.toFixed(2);
            break;
        case "euro":
            document.getElementById('resultado').innerHTML = "€ "+resultado.toFixed(2);
            break;
        case "iene":
            document.getElementById('resultado').innerHTML = "¥ "+resultado.toFixed(2);
            break;
        default:
            document.getElementById('resultado').innerHTML ='Digite um valor';
            break;
    }

    // document.getElementById('resultado').innerHTML = 
}