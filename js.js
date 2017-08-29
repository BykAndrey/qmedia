$(document).ready(function() {
  var menu = $('header .topmenu');

  $(window).resize(function() {



    menu.css(display, 'none');
  });






/*Open Info Menu*/
  $('header  .openmenu').click(function() {
    if (menu.css('display') == "block") {

      menu.animate({
        'height': '0px!important',
        'opacity': 'hide'
      }, 1000);
      setTimeout(function() {
        menu.css('display', 'none');
      }, 1000);

    } else {
      setTimeout(function() {
        menu.css('display', 'block');
      }, 1000);

      menu.animate({
        'height': 'inherit!important',
        'opacity': 'show'
      }, 1000);
    }
  })
})
