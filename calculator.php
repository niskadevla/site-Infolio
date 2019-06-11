<?php
  $title = "Просчитать цену| Калькулятор услуг |  Копицентр &laquo;Infolio&raquo;";
  $keywords = "Калькулятор услуг, просчет цены, сколько стоит ксерокс, сколько стоит печать";
  $url = "http://infolio.top/calculator.php";

  require_once "included/header.php";
  require_once "included/sidebar.php";
?>

<article class="col-lg-9">
  <div class="content">
    <div class="contentTitle">
      <h4 class="text-uppercase">услуги / калькулятор цены</h4>
    </div>
    <div class="contentInner row">

      <div class="col-sm-6"> <!-- col-sm -->
        <div class="form-services" id="formServices">

            <h3 class="form-services_title">Форма заказа</h3>

            <div class="form-services_inner">

              <!-- <div class="form-group row">
                <label class="col-12 col-sm-6">Наименование услуг:</label>
                <div class="col-12 col-sm-6">
                  <select class="form-control" name="nameServices">
                    <option value="" selected></option>
                    <option value="2">Распечатка</option>
                    <option value="3">Сканирование</option>
                  </select>
                </div>
              </div> -->

              <!-- <div class="form-group">
                <select class="form-control" name="">
                  <option value="1">1.1</option>
                  <option value="2">1.2</option>
                </select>
              </div>

              <div class="form-group row">
                <label for="text1">Text</label>
                <input id="text1" class="form-control" type="text">
              </div>

              <div class="form-group row">
                <label for="radio1">Ч/б</label>
                <input class="form-control" id="radio1" type="radio" name="color" value="black" selected>
                <label for="radio2">Цвет</label>
                <input class="form-control" id="radio2" type="radio" name="color" value="color">
              </div>

              <div class="form-group row">
                <label for="number1">Количество страниц: </label>
               <input type="number" class="form-control" id="number1" placeholder="1" min="1" step="1" name="amount">
              </div> -->
            </div>



            <!-- <input type="submit" value="Посчитать"> -->



          <div class="form-services_notification">
          </div>

        </div>
      </div> <!-- -END- col-sm   -->

      <div class="col-sm-6">
        <div class="table-services" id="tableServices">
          <h3 class="table-services_title">Результат просчета</h3>
          <p></p>
          <p id="totalSum">Сумма заказа: <span>0</span> грн.</p>
        </div>
      </div> <!-- -END- col-sm   -->
    </div>  <!-- -END- contentInner -->
  </div> <!-- -END- content-->
</article>

<?php
  $links = array("<link rel='stylesheet' type='text/css' href='/css/calculator.css'/>");
  $scripts = array("http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
                    "/js/calculator.js");

  require_once "included/footer.php";
?>
