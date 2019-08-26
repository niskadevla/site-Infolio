<?php ## Обработчик HTML-формы.
//***
// function incoming_files() {
//     $files = $_FILES;
//     $files2 = [];
//     foreach ($files as $input => $infoArr) {
//         $filesByInput = [];
//         foreach ($infoArr as $key => $valueArr) {
//             if (is_array($valueArr)) { // file input "multiple"
//                 foreach($valueArr as $i=>$value) {
//                     $filesByInput[$i][$key] = $value;
//                 }
//             }
//             else { // -> string, normal file input
//                 $filesByInput[] = $infoArr;
//                 break;
//             }
//         }
//         $files2 = array_merge($files2,$filesByInput);
//     }
//     $files3 = [];
//     foreach($files2 as $file) { // let's filter empty & errors
//         if (!$file['error']) $files3[] = $file;
//     }
//     return $files3;
// }
//
// $tmpFiles = incoming_files();
// echo("здесь tmpFiles = ");
// print_r($tmpFiles);
// echo("<br>");
//
// echo("здесь _Files = ");
// print_r($_FILES);
// echo("<br>");

//***

  print_r($_FILES);

  $error = '';
  if(empty($_POST['mail_from'])) {
    $error = "error: Введите адрес отправителя";
    echo($error);
    return;
  }
  // проверяем правильность заполнения с помощью регулярного выражения
  $pattern = "/^[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,6}$/i";
  if (!preg_match($pattern, $_POST['mail_from'])) {
    $error = "error: Введите адрес в виде somebody@server.com";
    echo($error);
    return;
  }

  $_POST['mail_from'] = htmlspecialchars(stripslashes($_POST['mail_from']));
  $_POST['mail_subject'] =
                  htmlspecialchars(stripslashes($_POST['mail_subject']));
  $_POST['mail_msg'] =
                      htmlspecialchars(stripslashes($_POST['mail_msg']));
  $picture = [];

  // Если поле выбора вложения не пустое - закачиваем его на сервер
  for($i = 0; $i < count( $_FILES['mail_file']['name'] ); $i++) {
    if ( !empty($_FILES['mail_file']['tmp_name']) ) {
      // Загружаем файл
      if (count( $_FILES['mail_file']['name']) == 1) {
        $path = $_FILES['mail_file']['name'];
        if (copy($_FILES['mail_file']['tmp_name'], $path)) $picture = $path;
      } else {
        $path = $_FILES['mail_file']['name'][$i];
        if (copy($_FILES['mail_file']['tmp_name'][$i], $path)) array_push($picture, $path);
      }
    }
  }

  $thm = $_POST['mail_subject'] . ' с сайта: ' . $_SERVER['HTTP_REFERER'];
  $msg = "<strong>Ваш комментарий: </strong><br/>\n".
      $_POST['mail_msg']."\n"."
      <br/>
      <br/>\n".
      $_POST['mail_table'];

  $mail_fro = $_POST['mail_from'];
  // $mail_to = "infolio009@gmail.com, $mail_fro";
  $mail_to = "infolio2009@ukr.net, infolio009@gmail.com, $mail_fro";
  $mail_from = 'From: ' . $_POST['mail_from'];

  // Отправляем почтовое сообщение
  send_mail($mail_to, $thm, $msg, $picture, $mail_from);

  // Вспомогательная функция для отправки почтового сообщения с вложением
  function send_mail($to, $thm, $html, $path, $from) {
    $files = [];
    if (!empty($path)) {
      for($i = 0; $i < count($path); $i++) {
        if (count($path) == 1) {
          $fp = fopen($path,"r");
          if (!$fp) {
            $error = "error: Файл ".$path."не может быть прочитан";
            echo($error);
            return;
          }
          $files = fread($fp, filesize($path));
          fclose($fp);
        } else {
          $fp = fopen($path[$i],"r");
          if (!$fp) {
            $error = "error: Файл ".$path[$i]."не может быть прочитан";
            echo($error);
            return;
          }
          $file = fread($fp, filesize($path[$i]));
          array_push( $files, $file );
          fclose($fp);
        }
      }
    }

    $boundary = "--".md5(uniqid(time())); // генерируем разделитель
    $headers .= "MIME-Version: 1.0\n";
    $headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    $headers .= "$from\n";
    $multipart .= "--{$boundary}\n";
    $kod = 'utf-8'; // или $kod = 'windows-1251';
    $multipart .= "Content-Type: text/html; charset=$kod\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n";
    $multipart .= "$html\n";

    $message_part = "--{$boundary}\n";
    if (!empty($path)) {
      for($i = 0; $i < count($path); $i++) {
        $message_part .= "Content-Type: application/octet-stream\n";
        // $message_part .= "Content-Type: $_FILES['mail_file']['type']\n";
        $message_part .= "Content-Transfer-Encoding: base64\n";
        if (count($path) == 1) {
          $message_part .= "Content-Disposition: attachment; filename = \"".$path."\"\n";
          $message_part .= chunk_split(base64_encode($files), 70, "\n")."\n";
        } else {
          $message_part .= "Content-Disposition: attachment; filename = \"".$path[$i]."\"\n";
          $message_part .= chunk_split(base64_encode($files[$i]), 70, "\n")."\n";
          $message_part .= "--{$boundary}\n";
        }
      }
    }

    $multipart .= $message_part."--$boundary--\n";

    if(!mail($to, $thm, $multipart, $headers))
    {
      $error = "error: К сожалению, письмо не отправлено";
      echo($error);
    }

    //Удаляет временные файлы с хостинга после отправки
    // if (!empty($path) && count($path) == 1) unlink($path);
    // elseif (!empty($path)) {
    //   foreach ($path as $value) {
    //     unlink($value);
    //   }
    // }

  }

  echo('good: Отправлено');
?>
