var deltaHistory = new Array();

var juzgarMovimiento = function (delta) {
    if (delta < -30) {
        return 'horrible'
    }

    if (delta < -12) {
        return 'mala'
    }

    if (delta > 12) {
        return 'mala'
    }

    if (delta > 30) {
        return 'horrible'
    }

    return 'callado'
}

var reproducir = function (ruta) {
    var audio = new Audio(ruta);
    window.setTimeout(function () {
        audio.play()
    }, 5);
}

var iniciarPartida = function () {
    reproducir('audios/Comentarios/Amigos gran partida va a ser esta.wav')
}

var ilegal = function() {
    // ilegal
}

var finJuego = function() {
    reproducir('audios/Comentarios/Se nos fue.wav')
}

var comentarMovimiento = function (source, target) {
    // console.log('>>>>>>> comentarMovimiento', source, target)
}

var comentarDiferencia = function (player, eval1, eval2) {
    var currDelta = eval2 - eval1;
    var jugadaActual = juzgarMovimiento(currDelta)
    deltaHistory.push(jugadaActual)
    
    // console.log('>>>>>>> comentarDiferencia', player, eval1, eval2, currDelta)

    var jugadaPrevia = 'callado';
    if (deltaHistory.length > 1) {
        jugadaPrevia = deltaHistory[deltaHistory.length - 2]
    }

    if (jugadaPrevia == 'horrible') {
        if (jugadaActual == 'callado') {
            if (player == 'cpu') {
                console.log('MUY BUENA')
                reproducir('audios/+1/Ahi va viejo.wav')
                console.log('historico', deltaHistory)
            } else {
                console.log('HORRIBLE')
                reproducir('audios/-3/Quizas haya sido una entrega tipo alpha cero.wav')
                console.log('historico', deltaHistory)
            }
        }
    }

    if (jugadaPrevia == 'mala') {
        if (jugadaActual == 'callado') {
            if (player == 'cpu') {
                console.log('buena')
                reproducir('audios/+2/Miralo.wav')
                console.log('historico', deltaHistory)
            } else {
                console.log('mala')
                reproducir('audios/-3/Y esa la vio 2.wav')
                console.log('historico', deltaHistory)
            }
        }
    }

    if (jugadaPrevia == 'callado') {
        if (jugadaActual == 'horrible') {
            if (player == 'cpu') {
                console.log('posiblemente horrible...')
                console.log('historico', deltaHistory)
            } else {
                console.log('posiblemente buena...')
                console.log('historico', deltaHistory)
            }
        }
    }

    // reproducir('audios/-3/Quizas haya sido una entrega tipo alpha cero.wav')
    // reproducir('audios/-3/Y esa la vio 2.wav')
    // reproducir('audios/-1/No cambies nada.wav')
    // reproducir('audios/Jaque/Un jaquester.wav')
    // reproducir('audios/+3/Si si si si.wav')
    // reproducir('audios/+2/Miralo.wav')
    // reproducir('audios/+1/Ahi va viejo.wav')
    // reproducir('audios/Jaque/Un jaquester.wav')
}


