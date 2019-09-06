'use strict';

var form = document.forms.calculatorSend;
let input = form.mail_file;

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
  // добавим ещё одно поле - таблицу результатов расчета
  formData.append("mail_table", tableForEmail());
  // добавим массив файлов прикрепленных
  if(input.files.length > 1) {
    for(let i = 0; i <  input.files.length; i++) {
      formData.append("mail_file[]", input.files[i]);
    }
  }

  var xhr2 = new XMLHttpRequest();

  //Создаем POST запрос
  xhr2.open('POST', '/upload/handler.php', true);
  // xhr2.setRequestHeader('Content-type', 'multipart/form-data');
  // xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr2.onload = xhr2.onerror = function() {
    if (xhr2.status != 200) {
      console.log(xhr2.status + ' : ' + xhr2.statusText);
      form.lastElementChild.innerHTML = xhr2.status + ' : ' + xhr2.statusText;
    } else {
       if(xhr2.response.indexOf('good') !== -1) {
         console.log(`response = ${xhr2.response}`);
         alert("Ваш заказ принят.\nВся информация отправлена вам на email");
         form.reset();
         location.reload(true);
       } else {
         form.lastElementChild.innerHTML = `К сожалению файлы не отправлены! ${xhr2.response}`;
         console.log(`response = ${xhr2.response}`);
       }
    }
  }

  xhr2.send(formData);

  form.lastElementChild.innerHTML = "<strong>Идет загрузка...</strong>";
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

let preview = document.createElement("p");
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

    for(var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement('li');
      var para = document.createElement('p');

      para.textContent = 'Имя файла ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
      listItem.appendChild(para);

      list.appendChild(listItem);
    }

    // Общее количество файлов
    var listItem = document.createElement('li');
    var para = document.createElement('p');

    para.textContent = 'Общий размер файлов = ' + returnFileSize(getTotalFilesSize()) + '.';
    listItem.appendChild(para);

    list.appendChild(listItem);
    // ***

    if (!validFileSize(getTotalFilesSize())) {
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
  if ((number/1048576).toFixed(1) < 20) {
    return true;
  }

  return false;
}

function getTotalFilesSize() {
  let totalFilesSize = 0;
  let curFiles = input.files;

  if(curFiles.length) {
    for(var i = 0; i < curFiles.length; i++) {
      totalFilesSize += curFiles[i].size;
    }

    return totalFilesSize;
  }
}

function validateFiles() {
  let curFiles = input.files;

  return !curFiles.length ? true : validFileSize(getTotalFilesSize()) ? true : false;

  // if(curFiles.length) {
  //   if (!validFileSize(getTotalFilesSize())) return false;
  // }
  //
  // return true;
}

//***//

document.forms.calculatorSend.addEventListener("submit", function(e) {
  e.preventDefault();

  if ( validateMail(form) && validateFiles() ) {
    sendMail(form);
  }
});
