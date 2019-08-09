<?php ## Обработчик HTML-формы.
  $error = '';
  if(empty($_POST['mail_from'])) {
    $error = "Введите адрес отправителя";
    return;
  }
  // проверяем правильность заполнения с помощью регулярного выражения
  $pattern = "/^[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,6}$/i";
  if (!preg_match($pattern, $_POST['mail_from'])) {
    $error = "Введите адрес в виде somebody@server.com";
    return;
  }

  $_POST['mail_from'] = htmlspecialchars(stripslashes($_POST['mail_from']));
  $_POST['mail_subject'] =
                  htmlspecialchars(stripslashes($_POST['mail_subject']));
  $_POST['mail_msg'] =
                      htmlspecialchars(stripslashes($_POST['mail_msg']));
  $picture = "";
  // Если поле выбора вложения не пустое - закачиваем его на сервер
  if (!empty($_FILES['mail_file']['tmp_name'])) {
    // Загружаем файл
    $path = $_FILES['mail_file']['name'];
    if (copy($_FILES['mail_file']['tmp_name'], $path)) $picture = $path;
  }
  $thm = $_POST['mail_subject'];
  $msg = "<strong>Ваш комментарий: </strong><br/>\n".
      $_POST['mail_msg']."\n"."
      <br/>
      <br/>\n".
      $_POST['mail_table'];

  $mail_fro = $_POST['mail_from'];
  $mail_to = "infolio009@gmail.com, $mail_fro";
  // $mail_to = "infolio2009@ukr.net, $mail_fro";
  $mail_from = 'From: '.$_POST['mail_from'];
  // Отправляем почтовое сообщение
  // if(empty($picture)) mail($mail_to, $thm, $msg, $mail_from);
  // else
  send_mail($mail_to, $thm, $msg, $picture, $mail_from);

  // Вспомогательная функция для отправки почтового сообщения с вложением
  function send_mail($to, $thm, $html, $path, $from) {
    if (!empty($path)) {
      $fp = fopen($path,"r");
      if (!$fp) {
        $error = "Файл ".$path."не может быть прочитан";
        return;
      }
      $file = fread($fp, filesize($path));
      fclose($fp);
    }

    $boundary = "--".md5(uniqid(time())); // генерируем разделитель
    // $boundary = "--777"; // генерируем разделитель
    $headers .= "MIME-Version: 1.0\n";
    $headers .="Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
    $headers .= "$from\n";
    $multipart .= "--$boundary\n";
    $kod = 'utf-8'; // или $kod = 'windows-1251';
    $multipart .= "Content-Type: text/html; charset=$kod\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n";
    $multipart .= "$html\n";

    $message_part = "--$boundary\n";
    if (!empty($path)) {
      $message_part .= "Content-Type: application/octet-stream\n";
      $message_part .= "Content-Transfer-Encoding: base64\n";
      $message_part .= "Content-Disposition: attachment; filename = \"".$path."\"\n";
      $message_part .= chunk_split(base64_encode($file))."\n";
    }

    $multipart .= $message_part."--$boundary--\n";

    if(!mail($to, $thm, $multipart, $headers))
    {
      $error = "К сожалению, письмо не отправлено";
    }

    //Удаляет временные файлы с хостинга после отправки
    unlink($path);
  }
  // Автоматический переход на главную страницу форума
  header("Location: ".$_SERVER['PHP_SELF']);
?>

<!-- <script type="text/javascript">
  window.location.href = "./calculator.php";
</script> -->
