$().ready(function() {
  animateElements();
  $(window).scroll(function() {
    animateElements();
  });
});
function isVisible(object) {
  const offset = 0;
  var viewport = $(window).scrollTop() + $(window).height();
  var border = $(object).offset();
  border.bottom = border.top + $(object).outerHeight();

  return !(
    viewport < border.top + offset ||
    $(window).scrollTop() > border.bottom - offset
  );
}

function animateElements() {
  $(".scrollEffect").each(function() {
    addScrollEffect(this);
  });
}

function addScrollEffect(object) {
  if (isVisible(object)) {
    $(object).addClass("scroll");
    var rate = window.pageYOffset * object.dataset.rate;
    rate = rate / 10;

    //console.log($(object).scrollHeight, $(object).offsetTop());

    object.style.transform = "translate3d(0px," + rate + "px, 0px)";
  } else {
    $(object).removeClass("scroll");
  }
}
