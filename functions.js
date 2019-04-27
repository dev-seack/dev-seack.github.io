$(document).ready(() => {
  var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  $(window).scroll(() => {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
      if ($(window).scrollTop() > 0) {
        $(".navItemContainer").addClass("scrolled");
      } else {
        $(".navItemContainer").removeClass("scrolled");
      }
    } else {
      $(".navItemContainer").removeClass("scrolled");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  });

  //MOBILE MENU
  $(".mobileMenuToggle").on("click", () => {
    // $("body").toggleClass("openMenu");
    // disableBodyScroll($("body"));
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
    // $("body").toggleClass("openPopup");
    bodyScrollLock.clearAllBodyScrollLocks();
  });
  $(".showcase .textContent .showMore").on("click", function() {
    let popupName = $(this).data("targetpopup");
    const popupElement = $('.showcase .popup*[data-popup="' + popupName + '"]');
    //$("body").toggleClass("openPopup");
    bodyScrollLock.disableBodyScroll(popupElement);

    popupElement.addClass("active");
  });
});
