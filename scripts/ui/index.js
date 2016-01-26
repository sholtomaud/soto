var fastn = require('^fastn');

window.addEventListener('load', function(){
    var controls = require('./controls');

    controls.attach().render();

    document.body.appendChild(controls.element);
});
