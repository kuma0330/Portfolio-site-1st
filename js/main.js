/* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href); 
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

/* --------------------------------
 * フィルター
 * -------------------------------- */
$(function() {
    const $filters = $('.filter [data-filter]'),
          $boxes = $('.boxes [data]');
  
    $filters.on('click', function(e) {
      e.preventDefault();
     
      
      $filters.removeClass('active');
      $(this).addClass('active');
  
      const $filterData = $(this).attr('data-filter');
  
      if ($filterData == 'all') {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.addClass('is-animated').fadeIn();
          });
      } else {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.filter('[data = "' + $filterData + '"]')
              .addClass('is-animated').fadeIn();
          });
      }
    });
});

