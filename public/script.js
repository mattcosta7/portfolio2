$(document).ready(function(){
  $('.socialtext').hide();

  $('.socialRoll').on('mouseenter',function(){
    $(this).find('span').show();
  }) 
  $('.socialRoll').on('mouseleave',function(){
    $(this).find('span').hide();
  })


})

