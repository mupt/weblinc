
// Replace thumbnail image with swatch image
$(document).ready(function() {
	$('.wl-item').each(function (i) { 
		var $this = $(this),
			mainimage = $this.find( $('.wl-thumbnail') ),
			$swatch = $this.find('.swatch-list a');
			$swatch.on('click', function() {	
  				var src = $(this).data('src'),
  				mainimage_source = mainimage.attr("src");
  			if (mainimage_source != src ) {
				mainimage.attr('src', src); 
				} else {		
				return;							
				}
			});
	});		
});


//Navigation Menu JS
$(document).ready(function() {
	var $this = $(this);
	$('.wl-navigation').each(function() {
		var anchor = $this.find('.sub-menu').closest('li').children('.list-item');
		anchor.on('click', function(e) {
			e.preventDefault;
				var target = $(this),
					subMenu = target.parent('li').children('.sub-menu'),
					parentMenu = subMenu.parents('.sub-menu').closest('li').children('.list-item'),
					allsubMenu = $this.find('.sub-menu'),
					allAnchor = $this.find('.sub-menu').closest('li').children('.list-item');
				if(target.hasClass('is-active')) {
					target.removeClass('is-active');
					subMenu.removeClass('visible-menu');
					parentMenu.toggleClass('is-active');
				} else {
					if (subMenu.hasClass('visible-menu')) {
						allsubMenu.removeClass('visible-menu');
						allAnchor.removeClass('is-active');
					} else {
							target.addClass('is-active');
							subMenu.addClass('visible-menu');
							parentMenu.toggleClass('is-active');
					};
				};
		});

	});

});





// Swipe.js Aside Promotional Carousel

$(document).ready(function(){
	$('.wl-swipe').each(function() { 
		var $this = $(this),
			$swipe = $this.find('.swipe'),
			next = $this.find('.next'),
			prev = $this.find('.prev'),
			dot = $this.find('.position-indicator'),
			//options to pass Slider
			options = {
				startSlide:0,
				speed: 300,
				auto: 3000,
				continuous: true,
				disableScroll: false,
				stopPropagation: true,
				callback: function(index, elem) {
					var	alldots = $('.position-indicator');
						$(alldots).removeClass('on');
				},
				transitionEnd: function(index, elem) {
					var dot = $('.position-indicator')[index];
						$(dot).addClass('on');
				}

				},				
			// Initative some slide action with the above parameters
			mySwipe = $swipe.Swipe(options).data('Swipe'),
			pos = mySwipe.getPos(), 
			thisdot = dot[pos];
			$(thisdot).addClass("on");
			// Not currently in markup
			next.on('click', function(e){
				e.preventDefault();
				var pos = mySwipe.getPos(), 
					thisdot = dot[pos];
				mySwipe.next();
				dot.removeClass("on");
				$(thisdot).addClass("on");				
			});
			// Not currently in markup
			prev.on('click', function(e){
				e.preventDefault();
				var pos = mySwipe.getPos(),
					thisdot = dot[pos];
				mySwipe.prev();
				dot.removeClass("on");
				$(thisdot).addClass("on");				
			});
			// Initiative on-click event for the position-indicator dots - user assumes control of component
			dot.on('click', function(e) {
				e.preventDefault();
				var pos = dot.index(this);
					mySwipe.slide(pos, 100);
				dot.removeClass("on");
				$(this).addClass("on");
			});
	});
});



