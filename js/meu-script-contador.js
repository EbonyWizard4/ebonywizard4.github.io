function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('[Erro] Valor de passo inválido!')
        }else if (i < f){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c}, `
            }
        }else if(i > f){
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c}, `
            }
        }else {
            resultado.innerHTML = 'Impossível contar, verifique os valores e tente novamente!'
        }
        
        resultado.innerHTML += `\u{1f3c1}`
    }
}
