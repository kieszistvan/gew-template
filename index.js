(function(document, undefined) {
  "use strict";

  var updateOnContentLoaded = function updateOnContentLoaded(event) {
    var content = document.createTextNode('pityu');

    var newPar = document.createElement('p');
    newPar.setAttribute('data-down-text', 'pityu');
    newPar.appendChild(content);

    var newDiv = document.createElement('div');
    newDiv.appendChild(newPar);

    document.querySelector('.main').parentNode.appendChild(newDiv);
  };

  var updateClickButton = function updateClickButton(button) {
    button.onclick = function clickButtonClick(event) {
      console.log('clicked');
    };

    button.addEventListener('mousedown', function clickButtonMouseDown(event) {
      var downText = document.querySelector('[data-down-text]').getAttribute('data-down-text');
      button.textContent = downText;
    });

    button.addEventListener('mouseup', function clickButtonMouseUp(event) {
      button.textContent = 'clicker';
    });
  };

  document.addEventListener('DOMContentLoaded', updateOnContentLoaded);
  updateClickButton(document.getElementById('clicker'));


})(document);
