'use strict';
  function soundClick() {
    var audio = new Audio('audio/soundPaper.mp3');
    // audio.src = 'audio/soundPaper.mp3';
    // audio.autoplay = true;
    // audio = null;
    audio.play();
  }

  //Меню верхнее - гамбургер
  $("#toggleButton").click(function() {
    $(".mobileMenuInner").slideToggle("slow");
    soundClick();
  });

  // var h = 300;
  // var isShow = false;
  // function slideToggle(elem) {
  //
  //   function hide() {
  //     elem.style.display = "none";
  //   }
  //
  //   function show() {
  //     isShow = true;
  //   }
  //
  //
  //   if(!elem.offsetHeight) {
  //     elem.removeEventListener("transitionend", hide);
  //
  //     elem.style.display = "block";
  //     elem.style.overflow = "hidden";
  //     elem.style.transition = "height 2s ease";
  //     elem.style.height = h + 'px';
  //
  //     elem.classList.remove("slowHide");
  //     elem.classList.add("slowShow");
  //     elem.addEventListener("transitionend", show);
  //   } else if (elem.offsetHeight) {
  //     elem.removeEventListener("transitionend", show);
  //     h = elem.offsetHeight || parseInt(getComputedStyle(elem));
  //     console.log(parseInt(getComputedStyle(elem)));
  //
  //     elem.style.overflow = "hidden";
  //     elem.style.transition = "height 2s ease";
  //     elem.style.height = 0;
  //
  //     elem.addEventListener("transitionend", hide);
  //   }
  //
  // }



  // function slideToggle() {
  //
  //   if(elem.classList.contains("slowHide") || !elem.offsetHeight) {
  //
  //      elem.style.display = "block";
  //      elem.style.height = h + 'px';
  //
  //      elem.classList.remove("slowHide");
  //      elem.classList.add("slowShow");
  //      elem.addEventListener("transitionend", show);
  //    } else if (elem.offsetHeight) {
  //      elem.removeEventListener("transitionend", show);
  //      h = elem.offsetHeight || parseInt(getComputedStyle(elem));
  //      console.log(parseInt(getComputedStyle(elem)));
  //
  //      elem.style.overflow = "hidden";
  //      elem.style.transition = "height 2s ease";
  //      elem.style.height = 0;
  //
  //      elem.addEventListener("transitionend", hide);
  //    }
  //
  // }

  // document.getElementById("toggleButton").onclick = function() {
  //   slideToggle(document.getElementsByClassName("mobileMenuInner")[0]);
  //   soundClick();
  // };


  //Если кликнули вне гамбургера
  document.addEventListener("click", function(e) {
    if (!e.target.closest("#toggleButton") && document.getElementsByClassName("mobileMenuInner")[0].clientHeight ) {
      $(".mobileMenuInner").slideUp("slow");
      soundClick();
    }
  });


  // Боковое меню (выдвигается-задвигается)
  $(".sidebar").removeClass("sidebarShow").
    addClass("sidebarHide");
  $("#shadow").removeClass("shadow shadowShow").
    addClass("shadow shadowHide");

  $("#toggleButtonLeft").click(function() {
    soundClick();
    if ($(".sidebar").hasClass("sidebarHide")) {
      $(".sidebar").removeClass("sidebarHide").
        addClass("sidebarShow");
      $("#shadow").removeClass("shadow shadowHide").
        addClass("shadow shadowShow");
    }
    else if ($(".sidebar").hasClass("sidebarShow")) {
      $(".sidebar").removeClass("sidebarShow").
        addClass("sidebarHide");
      $("#shadow").removeClass("shadow shadowShow").
        addClass("shadow shadowHide");
    }
  });

  //Если кликнули вне бокового меню.
  $(document).click(function(e) {
    if ($(e.target).closest(".sidebar").length)
      return;
      if ($(".sidebar").hasClass("sidebarHide")) return;
      else if ($(".sidebar").hasClass("sidebarShow")) {
        $(".sidebar").removeClass("sidebarShow").
          addClass("sidebarHide");
        $("#shadow").removeClass("shadow shadowShow").
          addClass("shadow shadowHide");
      }

  });

  $(".menu li a").each(function () {
    if (this.href == location.href) $(this).parent().addClass('active');
  });






$(document).on("click",".menu li a", function() {
    $("menu li").removeClass('active');
    $(this).parent().addClass('active');
});


/*****************
* Анимация значков (animation)
 ****************/

   { let ii = document.querySelectorAll('div > i');

     for (var i = 0; i < ii.length; i++) {
       ii[i].classList.add('tossing');
     }
   }

   { let ii = document.querySelectorAll('a > i');

     for (var i = 0; i < ii.length; i++) {
       ii[i].classList.add('pulse');
     }
   }

  { let ii = document.querySelectorAll('.map-marker > img');

    for (let i = 0; i < ii.length; i++) {
      ii[i].classList.add('bounce');

      ii[i].addEventListener("webkitAnimationEnd", function() {
        ii[i].classList.remove('bounce','rotateOrdinate');
        ii[i].classList.add('rotateOrdinate');
      });
      ii[i].addEventListener("animationend", function() {
        ii[i].classList.remove('bounce','rotateOrdinate');
        ii[i].classList.add('rotateOrdinate');
      });
    }
  }


/***/
