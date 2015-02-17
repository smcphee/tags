/* ==========================================================
  Base Default JavaScript
  -- Table of Contents --
*/


// JS functions and initiations go here...

 $('.venue--categories__content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  speed: 500,
  asNavFor: '.venue--categories__nav'
});
$('.venue--categories__nav').slick({
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  asNavFor: '.venue--categories__content',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true,
  infinite: false
});
//make sure the slider nav doesn't trigger page refresh
$('.venue--categories__nav a').click(function(e){
	e.preventDefault();
});


//Changes the add tags button state
$('.onoffswitch input').change(function(){
	if($(this).is(':checked')){
		$(this).parents('.venue--category').find('.button--circle').removeClass('disabled');
		$(this).parents('.venue--category').find('.tag').show(200);
	}else{
		$(this).parents('.venue--category').find('.button--circle').addClass('disabled');
		$(this).parents('.venue--category').find('.tag').hide(200);
	}
});

//Toggles the active class on like/dislike

$('.tag-weight').click(function(e){
	e.preventDefault();
	$(this).siblings().removeClass('active');
	$(this).toggleClass('active');
});

//Toggles the active class on tag selections

$('.tag__list .tag').click(function(e){
	e.preventDefault();
	$(this).toggleClass('selected');
});