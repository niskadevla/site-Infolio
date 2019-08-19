<?php
  $title = "Просчитать цену| Калькулятор услуг |  Копицентр &laquo;Infolio&raquo;";
  $keywords = "Калькулятор услуг, просчет цены, сколько стоит ксерокс, сколько стоит печать";
  $url = "http://infolio.top/calculator.php";

  require_once "included/header.php";
  require_once "included/sidebar.php";
  include "included/options.php";
?>
<!--
<script src="/js/calculatorSend.js">
</script> -->

<?php
  // if (!empty($_POST)) {
  //   $_POST['mail_table'] = "<script type=\"text/javascript\">
  //                             tableForEmail();
  //                           </script>";
  //   //Обработчик HTML-формы
  //   include "included/handler.php";
  // }
?>

<article class="col-lg-9">
  <div class="content">
    <div class="contentTitle">
      <h4 class="text-uppercase">услуги / калькулятор цены</h4>
    </div>
    <div class="contentInner row content-calculator">

      <div class="col-sm-6"> <!-- col-sm -->
        <div class="form-services" id="formServices">

            <h3 class="form-services_title">Форма заказов</h3>

            <div class="form-services_inner">
            </div>

          <!-- <div class="form-services_notification">
          </div> -->

        </div>
      </div> <!-- -END- col-sm   -->

      <div class="col-sm-6">
        <div class="table-services" id="tableServices">
          <h3 class="table-services_title">Результат просчета</h3>
          <table>
            <caption>Вы выбрали:</caption>
            <tbody class="table-services_tbody">
            </tbody>

            <tfoot>
              <tr >
                <td id="sum" colspan="2">Цена за 1 шт (ед.): <span>0</span> <span style="font-weight: bold"></span> <?=$currency?></td>
              </tr>
              <tr style="background-color: #efefef;font-weight: bold;">
                <td id="totalSum" colspan="2">Сумма заказа: <span>0</span> <span style="font-weight: bold"></span> <?=$currency?></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div> <!-- -END- col-sm   -->

      <div class="col-sm-6">
        <div class="form-send" id="formSend">
          <h3 class="form-send_title">Форма отправки заказа</h3>

          <form name="calculatorSend" class="form-send_inner" enctype="multipart/form-data" action="" method="post">
            <div class="form-group row">
              <label class="col-12 col-md-4" for="mail_from"> Ваш e-mail *: </label>
              <input type="email" class="col-12 col-md-8" id="mail_from" name="mail_from" placeholder="vasya@gmail.com" required>
              <div class="form-send_notification">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-12 col-md-4" for="mail_subject"> Тема: </label>
              <input type="text" class="col-12 col-md-8" id="mail_subject" name="mail_subject" value="Просчет цены в калькуляторе">
            </div>
            <div class="form-group row">
              <label class="col-12 col-md-4" for="mail_msg"> Комментарии: </label>
              <textarea class="col-12 col-md-8" cols="56" rows="8" id="mail_msg" name="mail_msg" maxlength="69"></textarea>
              <div class="form-send_notification">
              </div>
            </div>
            <div class="form-group row">
              <label class="col-12 col-md-4" for="mail_msg"> Прикрепите файл: </label>
              <input type="file" class="col-12 col-md-8" id="mail_file" name="mail_file" multiple>
              <span class="form-send_notification">Файлы должны весить не более 10 Мб</span>
              <div class="form-send_notification">
              </div>
            </div>
            <!-- <div class="form-group row">
              <input type="hidden" class="col-12 col-md-8" name="mail_hidden" value="777">
            </div> -->
            <div class="form-group">
              <input id="submit" class="btn_submit" type="submit" value="Отправить">
            </div>
            <div class="form-send_notification">
              <?=$error?>
            </div>
          </form>
        </div>
      </div>
    </div>  <!-- -END- contentInner -->
  </div> <!-- -END- content-->
</article>

<?php
  $links = array("<link rel='stylesheet' type='text/css' href='/css/calculator.css'/>");
  $scripts = array("http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
                    "/js/calculator.js",
                    "/js/calculatorSend.js");

  require_once "included/footer.php";
?>
