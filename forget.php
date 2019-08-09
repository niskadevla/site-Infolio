<?php
  $title = "Забытые вещи в копировальном центре &laquo;Инфолио&raquo;";
  $keywords = "забытые вещи в кировальном центре &laquo;Инфолио&raquo; потеряшки";
  $url = "http://infolio.top/dostavka-i-oplata.php";

  require_once "included/header.php";
  require_once "included/sidebar.php";
?>


  <article class="col-lg-9">
    <div class="content" itemscope itemtype="http://schema.org/Service">

      <div class="contentTitle">
        <h4 class="text-uppercase" itemprop="name">Потеряшки</h4>
      </div>

      <span itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
        <meta itemprop="bestRating" content="5">
        <meta itemprop="worstRating" content="1">
        <meta itemprop="ratingValue" content="4.9">
        <meta itemprop="ratingCount" content="52">
      </span>

      <h2>Забытые, потерянные вещи и документы</h2>
      <p>Внимание!
        За утерянные вещи администрация ответственности не несет.
        Всё что выставлено на сайте, можно прийти и забрать, потдвердив что это ваше.
      </p>

      <div class="contentInner row">

        <div class="col-xsm-12 col-md-4"> <!-- col-sm (Одна карточка)  -->
          <div class="itemBoxPage row">
            <div class="itemImagePage col-xsm-12">
              <img src="/forget/scan1.jpg" alt="...">
            </div>
          </div>
        </div> <!-- -END- col-sm (Одна карточка)  -->

        <div class="col-xsm-12 col-md-4"> <!-- col-sm (Одна карточка)  -->
          <div class="itemBoxPage row">
            <div class="itemImagePage col-xsm-12">
              <img src="/forget/scan2.jpg" alt="...">
            </div>
          </div>
        </div> <!-- -END- col-sm (Одна карточка)  -->

        <div class="col-xsm-12 col-md-4"> <!-- col-sm (Одна карточка)  -->
          <div class="itemBoxPage row">
            <div class="itemImagePage col-xsm-12">
              <img src="/forget/scan3.jpg" alt="...">
            </div>
          </div>
        </div> <!-- -END- col-sm (Одна карточка)  -->

        <div class="col-xsm-12 col-md-4"> <!-- col-sm (Одна карточка)  -->
          <div class="itemBoxPage row">
            <div class="itemImagePage col-xsm-12">
              <img src="/forget/scan4.jpg" alt="...">
            </div>
          </div>
        </div> <!-- -END- col-sm (Одна карточка)  -->
      </div>  <!-- -END- contentInner -->

    </div> <!-- -END- content-->
  </article>

  <?php
    $links = array("<link rel='stylesheet' type='text/css' href='css/forget.css'/>");
    $scripts = array("http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

    require_once "included/footer.php";
  ?>
