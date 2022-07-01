"use strict";
// let & const
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = "externo!";
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
//# sourceMappingURL=let_const_01.js.map