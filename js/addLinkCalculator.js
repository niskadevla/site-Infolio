"use strict";

(function addLinkCalculator() {
  let contentTitle = document.getElementsByClassName('contentTitle')[0];
  let html = '<div class="content_link-calculator">\
                <a href="http://infolio.top/calculator.php">Просчитать цену =></a>\
              </div>';
  contentTitle.insertAdjacentHTML("afterEnd", html);
})();
