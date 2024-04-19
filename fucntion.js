function ligar(){
    if(!quebro()){
        window.document.getElementById('lampada').src = './img/acesa.svg'
    }   
}

function desligar(){
    if(!quebro()){
        window.document.getElementById('lampada').src = './img/apagada.svg'
    }
}

function quebrar(){
    window.document.getElementById('lampada').src = './img/quebrada.svg'
}

function quebro(){
    return window.document.getElementById('lampada').src.indexOf('quebrada') > -1
}