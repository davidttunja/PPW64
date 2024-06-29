var div_cajita = document.getElementById('cajita')
var es_presionado = false
var offset =[0,0]

div_cajita.addEventListener('mousedown', function(valor){
    es_presionado = true

    offset = [
        div_cajita.offsetLeft - valor.clientX,
        div_cajita.offsetTop - valor.clientY
    ]
})