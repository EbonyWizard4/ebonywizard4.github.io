function carregar(){
    var titulo = window.document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 18){
        //boa noite
        titulo.innerHTML = `Boa noite!`
    } else if(hora >= 12){
        //boa tarde
        titulo.innerHTML = `Boa tarde!`
    } else {
        //Bom dia
        titulo.innerHTML = `Bom dia!`
    }
}
