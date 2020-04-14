$(document).ready(() => {
  $(
    ".header__order-button, .header__bottom-link_contacts, .section__card-button_order"
  ).click(() => {
    scrollToSelector("#contacts");
  });
  $(".header__bottom-link_portfolio").click(() => {
    scrollToSelector("#portfolio");
  });
  $(".header__bottom-link_prices").click(() => {
    scrollToSelector("#prices");
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
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
