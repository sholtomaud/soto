var fastn = require('^fastn');


// var y = [0, 380, 414, 580, 720, 768, 990]; //breakpoints. 
// var w, x = 1, z = y.length;

// function init(){
//     for ( ; x < z; x++ ) {
//          w = window.matchMedia ( '(min-width:' + y[x] + 'px)' );
//          w.addListener (event);
         
//     }

//     w = window.innerWidth;
//     console.log('w: ', w);

//     for(--z; z; z--) {
//           x = y[z];
//           if( w <= x) {
//             // eval('px'+x+'(false)') 
//         } 
//     }

// }


window.addEventListener('load', function(){
    // init();
    var controls = require('./controls');

    controls.attach().render();

    document.body.appendChild(controls.element);
});
