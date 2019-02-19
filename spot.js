(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('希望 '))
        .then(() => engine.shake())
        .then(() => engine.toText('你的 '))
        .then(() => engine.shake())
        .then(() => engine.toText('19岁生日 '))
        .then(() => engine.shake())
        .then(() => engine.toText('一定要'))
        .then(() => engine.shake())
        .then(() => engine.toText('快乐'))
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
