$(document).ready(() => {
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  $(window).scroll(() => {
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
  $(".showcase .textContent .showMore").on("click", function() {
    let popupName = $(this).data("targetpopup");
    const popupElement = $('.showcase .popup*[data-popup="' + popupName + '"]');
    popupElement.addClass("active");
    bodyScrollLock.disableBodyScroll(
      document.querySelector('.showcase .popup[data-popup="' + popupName + '"]')
    );
  });
});
