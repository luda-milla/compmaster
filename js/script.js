$(document).ready(function() {

  //E-mail Ajax Send
  $('form').submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: '../mail.php', //Change
      data: th.serialize()
    }).done(function() {
      alert("Ваша заявка принята! Ожидайте звонка. Спасибо!");
      setTimeout(function() {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });

});



$(function(){
  $('.hamb').click(function(){
    $('.mobile').animate({
	right: 0
    });
$(this).hide();
 $('.overlay').fadeIn();
});
$('.mobile span, .overlay').click(function(){
  $('.mobile').animate({
	right: -250
  });
$('.hamb').show();
$('.overlay').fadeOut();
});
});
