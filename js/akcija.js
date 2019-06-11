'use strict';

setTimeout(createWindow2, 1000);

function createWindow2() {
  var modalWindow = document.createElement('div');
  var modalWindowInner = document.createElement('div');
  var modalWindowClose = document.createElement('div');
  modalWindow.className = "modal-window";
  modalWindowInner.className = "modal-window__inner";
  var img = document.createElement('img');
  img.src = '../img/we_are_10_years_old.jpg';
  img.alt = 'нам 10 лет';
  modalWindowInner.appendChild(img);
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
      modalWindow.remove();
      document.removeEventListener("click", closeWindow);
    }
  }
}
