var buttonAction = function buttonActionF(event) {

    var classTemp = 'removeelement' + numberRandom();

    this.parentNode.setAttribute('class',classTemp);

    removeElement('.' + classTemp);

};
