// 1. Import the functions
const bodyScrollLock = require("body-scroll-lock");
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

// 4. ...in some event handler after hiding the target element...
enableBodyScroll(targetElement);

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
    $("body").toggleClass("openMenu");
    //disableBodyScroll($("body"));
    $(".mobileMenu").toggleClass("active");
  });

  //POPUP
  $(".popup .closeIcon").on("click", () => {
    $(".popup").removeClass("active");
    $("body").toggleClass("openPopup");
    enableBodyScroll($("body"));
  });
  $(".showcase .textContent .showMore").on("click", function() {
    $("body").toggleClass("openPopup");
    disableBodyScroll($("body"));
    let popupName = $(this).data("targetpopup");
    $('.showcase .popup*[data-popup="' + popupName + '"]').addClass("active");
  });
});
