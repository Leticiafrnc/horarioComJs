function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas`   

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#9FD0F0' 
        
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#CD7410'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#010101'
    }
}


