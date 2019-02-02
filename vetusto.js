var ahhh = new Audio('audios/Ahhh.mp3');

var ilegal = function() {
    console.log('ILEGAL!!!!')
    ahhh.play();
}

var huboMovimiento = function (puntajeAnterior, source, target) {
    console.log('Comentar:', source, target)
    window.setTimeout(function () {
        ahhh.play()
    }, 10);
}

var huboRespuesta = function (puntajeAnterior, puntajeActual) {
    console.log('Puntaje antes de mover', puntajeAnterior)
    console.log('Nuevo puntaje', puntajeActual)
    window.setTimeout(function () {
        ahhh.play()
    }, 10);
}
