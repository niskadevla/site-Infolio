<?php
  $title = "Просчитать цену| Калькулятор услуг |  Копицентр &laquo;Infolio&raquo;";
  $keywords = "Калькулятор услуг, просчет цены, сколько стоит ксерокс, сколько стоит печать";
  $url = "http://infolio.top/calculator.php";

  require_once "included/header.php";
  require_once "included/sidebar.php";
  include "included/options.php";
?>

<article class="col-lg-9">
  <div class="content">
    <div class="contentTitle">
      <h4 class="text-uppercase">услуги / калькулятор цены</h4>
    </div>
    <div class="contentInner row">

      <div class="col-sm-6"> <!-- col-sm -->
        <div class="form-services" id="formServices">

            <h3 class="form-services_title">Форма заказов</h3>

            <div class="form-services_inner">
            </div>


            <!-- <input type="submit" value="Посчитать"> -->


          <!-- <div class="form-services_notification">
          </div> -->

        </div>
      </div> <!-- -END- col-sm   -->

      <div class="col-sm-6">
        <div class="table-services" id="tableServices">
          <h3 class="table-services_title">Результат просчета</h3>
          <!-- <p></p> -->
          <table>
            <caption>Вы выбрали:</caption>
            <tbody class="table-services_tbody">              
            </tbody>

            <tfoot class="table-services_tfoot">
              <tr>
                <td id="sum" colspan="2">Цена за 1 шт (ед.): <span>0</span> <span class="table-service_total-sum-discounted"></span> <?=$currency?></td>
              </tr>
              <tr>
                <td id="totalSum" colspan="2">Сумма заказа: <span>0</span> <span class="table-service_total-sum-discounted"></span> <?=$currency?></td>
              </tr>
            </tfoot>
          </table>
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
