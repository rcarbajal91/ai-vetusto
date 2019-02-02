var ahhh = new Audio('audios/Ahhh.mp3');

var ilegal = function() {
    console.log('ILEGAL!!!!')
    ahhh.play();
}

var comentar = function(source, target) {
    console.log('Comentar:', source, target)
    ahhh.play()
}

var huboMovimiento = function (puntajeAnterior, puntajeActual) {
    console.log('Puntaje antes de mover', puntajeAnterior)
    console.log('Nuevo puntaje', puntajeActual)
}
