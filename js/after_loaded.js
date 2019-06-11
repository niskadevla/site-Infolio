'use strict';
/* АвтоВысота Слайдера */
function autoHeight() {
  var items = document.getElementsByClassName("carousel-item");
  for (var i = 0; i < items.length; i++) {
    if (items[i].offsetWidth) {
      for (var j = 0; j < items.length; j++) {
        items[j].style.height = items[i].offsetWidth / 2  + "px";
      }
    }
  }
}

window.addEventListener("resize", function() {
  autoHeight();
});

window.addEventListener("load", function() {
  autoHeight();
});


/****************************************************
* Плавное появление надписи(contentTitle) и картинок
****************************************************/

function leftMove() {
  //$(".contentTitle").addClass("paddingMarginleft-0");
  var contentTitles = document.getElementsByClassName("contentTitle");
  for (var i = 0; i < contentTitles.length; i++) {
    contentTitles[i].classList.add("paddingMarginleft-0");
  }

  //$(".sidebar").addClass("paddingMarginleft-0");
  var sidebars = document.getElementsByClassName("sidebar");
  for (var i = 0; i < sidebars.length; i++) {
    sidebars[i].classList.add("paddingMarginleft-0");
  }

  //$(".itemImage img").addClass("width-100");
  var itemImages = document.querySelectorAll(".itemImage img");
  for (var i = 0; i < itemImages.length; i++) {
    itemImages[i].classList.add("width-100");
  }
}

window.addEventListener("load", function() {
  leftMove();
});

/***/


/* ********
*  Lazy img - картинки загружаются, только если попадают в окно браузера
**********/
function isVisible(elem) {
  var coords = elem.getBoundingClientRect();

  var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

  // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима
  var topVisible = coords.top >= 0 && coords.top <= windowHeight;
  var bottomVisible = coords.bottom <= windowHeight && coords.bottom >= 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  var imgs = document.getElementsByTagName('img');
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];

    var realsrc = img.getAttribute('realsrc');
    if (!realsrc) continue;

    if (isVisible(img)) {
      img.src = realsrc;
      img.setAttribute('realsrc', '');
    }
  }
}

window.addEventListener("load", showVisible);
// window.onscroll = showVisible;
window.addEventListener("scroll", showVisible);

/***/
