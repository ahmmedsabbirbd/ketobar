(function($){

	jQuery(document).ready(function(){

		/*** slick slider  */
		$('.client-slider').slick();

		/*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });
	});

}(jQuery));