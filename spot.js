(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('ϣ�� '))
        .then(() => engine.shake())
        .then(() => engine.toText('��� '))
        .then(() => engine.shake())
        .then(() => engine.toText('19������ '))
        .then(() => engine.shake())
        .then(() => engine.toText('һ��Ҫ'))
        .then(() => engine.shake())
        .then(() => engine.toText('����'))
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
