$(document).ready(() => {
  $(".header__order-button, .section__card-button_order").click(() => {
    scrollToSelector(".footer");
    return false;
  });

  $(".header__bottom-link_contacts").click(() => {
    scrollToSelector("#contacts");
    return false;
  });

  $(".header__bottom-link_portfolio").click(() => {
    scrollToSelector("#portfolio");
    return false;
  });

  $(".header__bottom-link_prices").click(() => {
    scrollToSelector("#prices");
    return false;
  });

  $(".footer__form-button").click(() => {
    $(".dialog_form-confirmation").fadeIn();
    return false;
  });

  $(".dialog_form-confirmation .dialog__button").click(() => {
    $(".dialog_form-confirmation").fadeOut();
  });
});

function scrollToSelector(selector) {
  $("html, body").animate(
    {
      scrollTop: $(selector).offset().top,
    },
    1000
  );
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    autoHeight: true,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
  });
});
