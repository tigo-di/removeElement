var buttonCreate = function buttonCreateF() {

    var button = document.createElement('button');

    button.setAttribute('type','button');
    button.setAttribute('class','removeElementButton');
    button.innerText = 'delete';

    button.addEventListener("click", buttonAction);

    return button;

};
