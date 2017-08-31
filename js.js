$(document).ready(function() {
  var menu = $('header .topmenu');
  var tabstitle = $('.page .section .tabs ul label');
  var tabs = $('.page .section .tabs .list ');
  console.log("Count tabs title=" + tabstitle.length);
  console.log("Count tabs=" + tabs.children().length);
  $("#datepicker").datepicker();
  $("#phone").mask("8(999) 999-9999");
  var flagerror = true;






  /*open forma*/
  $('.page .section.anketa .button').click(function(event) {
    $('.forma').css('display', 'block');

    $('.getSkidka').css('display', 'block');
  });
  /*close forma*/
  $('.forma .exit').click(function(event) {
    $('.forma').css('display', 'none');
    $('.getSkidka').css('display', 'none');
  });
  /*close danke*/
  $('.danke .exit').click(function(event) {
    $('.danke').css('display', 'none');
    $('.getSkidka').css('display', 'none');
  });
  /*validate*/

  $('.send .submit input[type=submit]').css('display', 'none');

  $('.forma form').submit(function(event) {
    event.preventDefault();
    if (flagerror) {

      $('.forma .send .errors').css('color', 'red');
      $('.forma .send .errors').html("Проверьте введенные данные")
    } else {
      /*Типа отправляются данные*/
      $('.forma').css('display', 'none');
      $('.danke').css('display', 'block');
      $('.getSkidka').css('display', 'block');
    }
  });
  $('#allow').click(function(event) {
    if ($(this).prop('checked')) {
      $('.send .submit input[type=submit]').css('display', 'block');
    } else {
      $('.send .submit input[type=submit]').css('display', 'none');
    }
  });
  $('.forma form  p input#name').change(function(event) {
    console.log($(this).val().length);
    if ($(this).val().length > 3) {
      flagerror = false;
    } else {
      flagerror = true;
    }
  });
  $('.forma form  p input#phone').change(function(event) {
    console.log($(this).val().length);
    if ($(this).val().length == 15) {
      flagerror = false;
    } else {
      flagerror = true;
    }
  });
  $('.forma form  p input#email').change(function(event) {
    console.log($(this).val().length);
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test($(this).val());
    if (valid) {
      flagerror = false;
    } else {
      flagerror = true;
    }
  });
  $('.forma form  p input#datepicker').change(function(event) {
    console.log($(this).val().length);
    if ($(this).val().length == 10) {
      flagerror = false;
    } else {
      flagerror = true;
    }
  });

  /*end validate*/

  $(window).resize(function() {



    menu.css(display, 'none');
  });


  /*Tabs*/
  $(tabstitle).click(function() {

    $(tabstitle).each(function(index, el) {
      $(el).parent('li').removeClass('active');
    });
    $(this).parent('li').addClass('active');
    $(tabs).children().each(function(index, el) {
      $(el).removeClass('active');
    });


    $(tabs).children('#' + $(this).attr('for')).addClass('active');

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
