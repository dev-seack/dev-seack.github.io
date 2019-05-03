$(document).ready(() => {
  // SCROLL
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  $(window).scroll(() => {
    clearTimeout($.data(this, "scrollTimer"));
    $.data(
      this,
      "scrollTimer",
      setTimeout(function() {
        $(".navItemContainer").removeClass("scrolled");
      }, 250)
    );

    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if ($(window).scrollTop() > 0) {
        $(".navItemContainer").addClass("scrolled");
      } else {
        $(".navItemContainer").removeClass("scrolled");
      }
    } else {
      $(".navItemContainer").removeClass("scrolled");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });

  //MOBILE MENU
  $(".mobileMenuToggle").on("click", () => {
    if (!$(".mobileMenu").hasClass("active")) {
      bodyScrollLock.disableBodyScroll();
    } else {
      bodyScrollLock.clearAllBodyScrollLocks();
    }

    $(".mobileMenu").toggleClass("active");
  });

  //POPUP
  $(".popup .closeIcon").on("click", () => {
    $(".popup").removeClass("active");
    bodyScrollLock.clearAllBodyScrollLocks();
  });
  $(".showcaseContainer .showcase").on("click", function() {
    let popupName = $(this).data("targetpopup");
    const popupElement = $(
      '.showcaseContainer .popup*[data-popup="' + popupName + '"]'
    );
    popupElement.addClass("active");
    bodyScrollLock.disableBodyScroll(
      document.querySelector(
        '.showcaseContainer .popup[data-popup="' + popupName + '"]'
      )
    );
  });

  // Contactform - Focus detection
  $(".inputGroup input, .inputGroup textarea").keyup(function() {
    if ($(this).val().length > 0) {
      $(this)
        .parent()
        .addClass("focus");
    } else {
      $(this)
        .parent()
        .removeClass("focus");
    }
  });
});
