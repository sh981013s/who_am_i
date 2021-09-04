"use strict";

(function() {
    const contentElem = document.querySelector('#scroller-content');

    contentElem.addEventListener('animationend', function(){
        console.log('start');
        window.location.href = "../real.php";
    })
})();