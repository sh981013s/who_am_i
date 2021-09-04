"use strict";

(function() {
    const imgContainer = document.querySelector('.img-container');
    const bonoFront = document.querySelector('.bono-img');

    console.log('active');
    

    function changeZ() {
        console.log('active');
        bonoFront.style.zIndex = 0;
    }
    imgContainer.addEventListener('mouseover', changeZ);
})();