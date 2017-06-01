$(document).ready(function() {
  //$('.content').hide();
//  $('.header').hide();
  $('.header').slideToggle(800);
  $('.content').fadeIn(2000)
  $('div.storeContainer').fadeIn(2000);
//handler for expanding item
  $('img.storeItem').click(function(){
    $('div.storeItem').hide();
    $(this).parent().show();
    $('div.storeItem').toggleClass('expandedItem');
    $('button.storeBackButton').show();
    $('.showMore').show();
  });
//handler for store back button
  $('button.storeBackButton').click(function(){
    $('button.storeBackButton').hide();
    $('div.storeItem').toggleClass('expandedItem');
    $('div.storeItem').show();
    $('.showMore').hide();
  });
});
