/*
Add .removeElement to div, p, ul or ol.
It's all.

by Tiago Dias @tigo
*/

;(function(){var buttonAction = function buttonActionF(event) {

    var classTemp = 'removeelement' + numberRandom();

    this.parentNode.setAttribute('class',classTemp);

    removeElement('.' + classTemp);

};
;var buttonCreate = function buttonCreateF() {

    var button = document.createElement('button');

    button.setAttribute('type','button');
    button.setAttribute('class','removeElementButton');
    button.innerText = 'delete';

    button.addEventListener("click", buttonAction);

    return button;

};
;var init = function initF() {

    var elementFather = document.querySelectorAll('.removeElement');


        elementFather.forEach(function(currentValue, currentIndex, listObj){


            switch (currentValue.tagName.toLowerCase()) {

                case "ul":
                case "ol":

                    var itens = listObj[currentIndex].getElementsByTagName('li');

                    for(var i=0; i<itens.length; i++){
                        itens[i].appendChild(buttonCreate());
                    }

                break;
                default:

                    listObj[currentIndex].appendChild(buttonCreate());

            }


        });

};
;var numberRandom = function numberRandomF() {

    return (Math.random() * 9999 | 0) + 1;
    //return (Math.floor(Math.random() * 9999) + 1;

};
;var removeElement = function removeElementF(target) {

    var targetFinal;

    if(targetFinal = document.querySelector(target)) {

        targetFinal.parentNode.removeChild(targetFinal);

    }

};
window.addEventListener("load", function(){ init(); });
})();