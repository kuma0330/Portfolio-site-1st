/* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href); 
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position},{ duration: 'slow', easing: 'swing',});
    return false;
  });
});

/* --------------------------------
 * 製品紹介のページ遷移
 * -------------------------------- */
$(function(){
	if($('main').attr('id') === 'work-content'){
		$('[data-work]').each(function(index, el) {
			let work_id = location.search.replace('?id=', ''), 
         work_key = $(this).attr('data-work'),
		     add_text = work[work_id - 1][work_key];

      $(this).text(add_text);

      if(work_key == "souce-code"){
        $('#show-github').attr("href", add_text);
      }else{
        $('#show-page-link').attr("href", add_text);
      };
		});
	};
})

