'use strict';

function tableForEmail() {
  let tableServices = document.getElementById("tableServices");
  let table = tableServices.querySelector("table");

  let htmlTable = '\
    <table>\
      <caption>Вы выбрали:</caption>\
      <tbody class="table-services_tbody">' +
        table.tBodies[0].innerHTML +
      '</tbody>' +
      '<tfoot class="table-services_tfoot">' +
        table.tFoot.innerHTML +
      '</tfoot>\
    </table>';

  return htmlTable;
}

function sendMail(form) {
  let formData = new FormData(form);
  // добавим ещё одно поле
  formData.append("mail_table", tableForEmail());

  var xhr2 = new XMLHttpRequest();

  //Создаем POST запрос
  xhr2.open('POST', '/included/handler.php', true);
  // xhr2.setRequestHeader('Content-type', 'multipart/form-data');
  // xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr2.onload = xhr2.onerror = function() {
    if (xhr2.status != 200) {
      console.log(xhr2.status + ' : ' + xhr2.statusText);
    }
  }

  xhr2.send(formData);
  // form.lastElementChild.innerHTML = "Ваш заказ отправлен";
  alert("Ваш заказ принят.\nВся информация отправлена вам на email");
}

function validate(form) {
  let pattern = /[0-9a-z_-]+@[0-9a-z_\.]+\.[a-z]{2,6}$/i;
  let error = "";

  if(pattern.test(form.mail_from.value) == false) {
    error = "Вы ввели не верный email";
    form.mail_from.parentNode.lastElementChild.innerHTML = error;
    return false;
  } else form.mail_from.parentNode.lastElementChild.innerHTML = "";

  // if(form.mail_msg.value == "") {
  //   error = "Вы не ввели сообщение";
  //   form.mail_msg.parentNode.lastElementChild.innerHTML = error;
  //   return false;
  // } else form.mail_msg.parentNode.lastElementChild.innerHTML = "";

  // if(form.mail_file.files.length < 1) {
  //   error = "Вы не загрузили файл";
  //   form.mail_file.parentNode.lastElementChild.innerHTML = error;
  //   return false;
  // } else form.mail_file.parentNode.lastElementChild.innerHTML = "";

  return true;
}

document.getElementById("submit").addEventListener("click", function(e) {
  let form = document.forms.calculatorSend;
  if (validate(form)) {
    sendMail(form);
    form.reset();
    // location.reload(true);
  }

  e.preventDefault();
});
