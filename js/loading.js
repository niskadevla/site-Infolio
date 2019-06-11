'use strict';
// Создаем функцию-конструктор для создания лоудера перед загрузкой
function Loading() {
  var div = document.createElement("div");

  // Локальная функция стартует сразу после создания body
  function start() {
    div.style.cssText = "\
      background-color: #fff;\
      z-index: 999999999;\
      position: fixed;\
      top: 0;\
      left: 0;\
      justify-content: center;\
      align-items: center;\
      display: flex;\
      opacity: 0.9\
    ";

    div.style.width = (document.documentElement.clientWidth || document.body.clientWidth) + "px";
    div.style.height = (document.documentElement.clientHeight || document.body.clientHeight) + "px";

    var img = document.createElement("img");
    img.src = "img/loading.gif";
    img.style.cssText = "\
      display: block;\
    ";

    document.body.appendChild(div);
    div.appendChild(img);
  }

  // Локальная функция - удаляет лоудер
  function finish() {
    document.body.removeChild(div);
  }

  this.start = start;
  this.finish = finish;
}

var loading = new Loading();
loading.start();

// Устанавливаем обработчик события, после загрузки ДОМ и еще 200мс - удаляет лоудер
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(loading.finish ,100);
});
