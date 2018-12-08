// se crea la variable keys para evitar
//  mover el auto si todavía no empezó el juego.
var keys;

$("#msg1").click(function(){
    $("#msg1").hide();
    $("#msg2").show();
});

$("#msg2").click(function(){
    $("#msg2").hide();
    $("canvas").show("slow");
    keys = {
        37: 'izquierda',
        38: 'arriba',
        39: 'derecha',
        40: 'abajo'
    };
});

$("msg-gameover").click(function(){
    $("msg-gameover").hide();
    $("canvas").show("slow");
})
