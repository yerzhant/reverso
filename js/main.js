$(document).ready(() => {
  $(
    ".header__order-button, .header__bottom-link_contacts, .section__card-button_order"
  ).click(() => {
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
