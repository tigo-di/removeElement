var removeElement = function removeElementF(target) {

    var targetFinal;

    if(targetFinal = document.querySelector(target)) {

        targetFinal.parentNode.removeChild(targetFinal);

    }

};
