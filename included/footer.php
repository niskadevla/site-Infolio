
</div> <!-- -END- contentWrap  -->
</div> <!-- -END- Сайдбар + Контент -->

<div class="container-fluid">
  <div class="map row text-center">
    <div class="col">
      <div class="mapInner">

      </div>
    </div>
       <!-- <img src="img/map.jpg" alt=""> -->
  </div>
</div>

<footer class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <span>&#169;Копировальный центр "Infolio"</span>
        </div>
        <div class="col-lg-3 col-md-6">
          <ul>
            <li>График работы:</li>
            <li>Пн - Пт: 8.30 - 19.30</li>
            <li>Сб - Вс: 10.00 - 18.00</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <ul>
            <li>График работы летний:</li>
            <li>(с 26 июня по 2 сентября)</li>
            <li>Пн - Пт: 8.30 - 17.00</li>
            <li>Сб - Вс: 11.00 - 16.00</li>
            <li>Если вы не успеваете, позвоните мы задержимся</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6">
          <!--LiveInternet counter-->
          <script type="text/javascript">
            document.write("<a href='//www.liveinternet.ru/click' "+
            "target=_blank><img src='//counter.yadro.ru/hit?t29.6;r"+
            escape(document.referrer)+((typeof(screen)=="undefined")?"":
            ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
            screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
            ";h"+escape(document.title.substring(0,150))+";"+Math.random()+
            "' alt='' title='LiveInternet: number of visitors and pageviews"+
            " is shown' "+
            "border='0' width='88' height='120'><\/a>")
          </script>
          <!--/LiveInternet-->
        </div>
      </div>
    </div>
</footer>

<!-- Подключаем файл, с помощью которого подключаются все линки и скрипты -->
<script src="js/loadLink.js">
</script>

<!-- Подключаем индивидуальные скрипты и линки для каждой страницы -->
<!-- Подключаем линки и скрипты, которые на всех страницах одинаковые -->
<script type="text/javascript">
  <?php
    $links = $links ? $links : [];
    $scripts = $scripts ? $scripts : [];

    array_push($links, "<link rel='stylesheet' type='text/css' href='css/grid-12.css'/>",
                  "<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.10/css/all.css' integrity='sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg' crossorigin='anonymous'>",
                  "<link href='https://fonts.googleapis.com/css?family=Pangolin|Roboto' rel='stylesheet'>",
                  "<link rel='stylesheet' href='css/style.css' type='text/css'>",
                  "<link rel='stylesheet' href='css/animation.css' type='text/css'>",
                  "<link rel='shortcut icon' href='../img/fav.png' type='image/x-icon'>");
    array_push($scripts, "js/main.js",
                          "js/after_loaded.js",
                          "js/copy.js");
  ?>

  loadLink(<?= json_encode($links);?>, <?= json_encode($scripts);?>);
</script>


</body>
</html>
