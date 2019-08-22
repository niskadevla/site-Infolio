'use strict';

var form = document.forms.calculatorSend;

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
    } else {
       if(xhr2.response.indexOf('good:') !== -1) {
         console.log(`response = ${xhr2.response}`);
       } else {
         console.log("Ответ пуст");
       }
    }
  }

  xhr2.send(formData);
  // form.lastElementChild.innerHTML = "Ваш заказ отправлен";
  alert("Ваш заказ принят.\nВся информация отправлена вам на email");
}

function validateMail(form) {
  let pattern = /[0-9a-z_-]+@[0-9a-z_\.]+\.[a-z]{2,6}$/i;

  if(pattern.test(form.mail_from.value) == false) {
    form.mail_from.parentNode.lastElementChild.innerHTML = "Вы ввели не верный email";
    return false;
  } else form.mail_from.parentNode.lastElementChild.innerHTML = "";

  return true;
}


//For validate files

var input = form.mail_file;
var preview = document.createElement("p");
preview.className = "form-send_notification";
input.insertAdjacentElement("afterEnd", preview);

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = input.files;
  if(curFiles.length === 0) {
    var para = document.createElement('p');
    para.textContent = 'В данный момент не выбрано ни одного файла для загрузки!';
    preview.appendChild(para);
  } else {
    var list = document.createElement('ol');
    preview.appendChild(list);

    let totalFilesSize = 0;

    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');

      totalFilesSize += curFiles[i].size;

      para.textContent = 'Имя файла ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
      listItem.appendChild(para);

      list.appendChild(listItem);
    }

    if (!validFileSize(totalFilesSize)) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');

      para.textContent = 'Слишком большой размер файла(ов). Обновите свой выбор.';
      listItem.appendChild(para);
      listItem.className = "form-send_error";

      list.appendChild(listItem);
    }
  }

}

function returnFileSize(number) {
  if(number < 1024) {
    return number + 'bytes';
  } else if(number > 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + 'KB';
  } else if(number > 1048576) {
    return (number/1048576).toFixed(1) + 'MB';
  }
}

function validFileSize(number) {
  if ((number/1048576).toFixed(1) < 10) {
    return true;
  }

  return false;
}

function validateFiles() {
  let totalFilesSize = 0;
  let curFiles = input.files;

  if(curFiles.length) {
    for(var i = 0; i < curFiles.length; i++) {
      totalFilesSize += curFiles[i].size;
    }

    if (!validFileSize(totalFilesSize)) return false;
  }

  return true;
}

//***//

document.forms.calculatorSend.addEventListener("submit", function(e) {
  e.preventDefault();

  if ( validateMail(form) && validateFiles() ) {
    sendMail(form);
    form.reset();
    // location.reload(true);
  }
});
