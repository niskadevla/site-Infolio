'use strict';

setTimeout(createWindow, 3000);

function createWindow() {
  var modalWindow = document.createElement('div');
  var modalWindowInner = document.createElement('div');
  var modalWindowClose = document.createElement('div');
  modalWindow.className = "modal-window";
  modalWindowInner.className = "modal-window__inner";
  modalWindowInner.innerHTML = "<h1>Акция!</h1>\
                          <h3>При заказе печати: диссертации + авторефераты</h3>\
                          <h2>Скидка -5%</h2>\
                          <p>Скидка суммируется со всеми акциями!</p>";
  modalWindowClose.innerHTML = "X";
  modalWindowClose.style.cssText = "position: absolute;\
                                top: 5px;\
                                right: 10px;\
                                cursor: pointer;\
                                border: 1px groove #aaa;\
                                padding: 0 3px";

  document.body.appendChild(modalWindow);
  modalWindow.appendChild(modalWindowInner);
  modalWindowInner.appendChild(modalWindowClose);

  document.addEventListener("click", closeWindow);

  function closeWindow(e) {
    var target = e.target;

    if (!target.closest(".modal-window") || target == modalWindowClose) {
       var content = document.getElementsByClassName('content')[0];
       content.insertBefore(modalWindow, content.children[1]);
       modalWindow.style.position = "static";
       // modalWindow.className = "";
       // content.appendChild(modalWindow);
       modalWindowClose.remove();

      // modalWindow.remove();
      document.removeEventListener("click", closeWindow);
    }
  }
}
