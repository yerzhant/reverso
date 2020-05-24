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
    sendMail();
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

function sendMail() {
  const formArray = $(".footer__form").serializeArray();
  const data = {};
  $.map(formArray, function (n, i) {
    data[n["name"]] = n["value"];
  });

  $.post("/mail.php", data, () => {
    fbq("track", "Lead");
    $(".footer__form").trigger("reset");
    $(".dialog_form-confirmation").fadeIn();
  });
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
