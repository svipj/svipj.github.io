(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('❤'))
        .then(() => engine.shake())
         .then(() => engine.toText('19岁 '))
        .then(() => engine.shake())
        .then(() => engine.toText('属于'))
        .then(() => engine.shake())
        .then(() => engine.toText('CUTE'))
        .then(() => engine.shake())
        .then(() => engine.toText('YOU'))
        .then(() => engine.shake())
        .then(() => engine.toText('一定要'))
        .then(() => engine.shake())
        .then(() => engine.toText('HAPPY♥'))
        .then(() => engine.shake())
        .then(() => engine.toText('2019'))
        .then(() => engine.shake())
        .then(() => engine.toText('0212'))
        .then(() => engine.shake())
        .then(() => engine.toText('Cutelin'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
