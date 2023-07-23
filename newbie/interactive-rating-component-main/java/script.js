var nota = 0

function pegar(n){
    nota = n
}

function passarNota(){
    if (nota != 0){
        var url = "agradecimento.html?nota" + nota
    }else{
        alert('Por favor selecione um nota para continuar...')
    }
    
    location.href = url
}

function valor(){
    var valor = location.search.indexOf('nota')
    
    var val = valor.substring(ind + 4)
    var res = document.querySelector('p.resultado')
    res.innerHTML = val
}