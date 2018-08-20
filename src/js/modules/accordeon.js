$(".accordeon__fixed").on('click', '.accordeon__trigger', function () {
  if ($(this).parent(".accordeon__fixed").find('.accordeon__activator').hasClass("accordeon__activator--open")) {
      $('.accordeon__activator--open').removeClass('accordeon__activator--open');
      $('.accordeon__hidden').slideUp('slow');
    } else {
      $('.accordeon__activator--open').removeClass('accordeon__activator--open');
      $('.accordeon__hidden').slideUp('slow');
      $(this).parent(".accordeon__fixed").find('.accordeon__hidden').slideDown('slow');
      $(this).parent(".accordeon__fixed").find('.accordeon__activator').toggleClass("accordeon__activator--open");
    }
  });
  