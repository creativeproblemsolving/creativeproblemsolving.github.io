$('.nav-toggle .toggle').click(function() {
  if ($('nav').hasClass('closed')) {
    $('nav').removeClass('closed');
  }
  else {
    $('nav').addClass('closed');
  }
})
