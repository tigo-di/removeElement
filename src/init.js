var init = function initF() {

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
