var reproducir = function (ruta) {
    var audio = new Audio(ruta);
    window.setTimeout(function () {
        audio.play()
    }, 5);
}

var iniciarPartida = function () {
    reproducir('audios/Amigos.wav')
}

var comentarMovimiento = function (source, target) {
    // console.log('>>>>>>> comentarMovimiento', source, target)
}

var comentarDiferencia = function (player, eval1, eval2) {
    console.log('>>>>>>> comentarDiferencia', player, eval1, eval2)

    var LEVEL_NEG_3 = -20;
    var LEVEL_NEG_2 = -10;
    var LEVEL_NEG_1 = -3;
    var LEVEL_PLUS_1 = 3;
    var LEVEL_PLUS_2 = 10;
    var LEVEL_PLUS_3 = 20;

    var delta = eval2 - eval1;

    if (player == 'user') {
        if (delta < LEVEL_NEG_3) {
            reproducir('audios/Quizas haya sido una entrega tipo alpha cero.wav')
            //reproducir('audios/Pero no ves nada.mp3')
        } else if (delta < LEVEL_NEG_2) {
            reproducir('audios/Y esa la vio 2.wav')

        } else if (delta < LEVEL_NEG_1) {
            reproducir('audios/Cuidado.wav')

        } else if (delta > LEVEL_PLUS_1) {
            reproducir('audios/Ahi va viejo.wav')

        } else if (delta > LEVEL_PLUS_2) {
            reproducir('audios/Comprendiendo.wav')
            // reproducir('audios/Tene cuidado titan.wav')

        } else if (delta > LEVEL_PLUS_3) {
            reproducir('audios/Si si si si.wav')
        
        } else {
            //reproducir('audios/Si señor.wav')
    
            if (game.in_check()) {
                reproducir('audios/Un jaquester.wav')
            }
        }
    }
}

var ilegal = function() {
    console.log('ILEGAL!!!!')
}

var finJuego = function() {
    reproducir('audios/')
}