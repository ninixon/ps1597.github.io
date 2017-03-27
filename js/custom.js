//activate with jquery

$('.filter-items').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.filter-nav ul li').click(function(){
	$('.filter-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.filter-items').isotope({
		filter: selector
	});
	return false;
});
