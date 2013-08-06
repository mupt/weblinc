
// Replace thumbnail image with swatch image
$(document).ready(function() {
	$('.wl-item').each(function (i) { 
		var $this = $(this),
			mainimage = $this.find( $('.wl-thumbnail') ),
			$swatch = $this.find('.swatch-list a');
		$swatch.on('click', function(e) {
				e.preventDefault();
				var src = $(this).data('src'),
				mainimage_source = mainimage.attr("src");
			if (mainimage_source != src ) {
			mainimage.attr('src', src); 
			} else {		
			return;							
			}
		});
	});		
	$('.wl-navigation').each(function(){        
		var allLink = $(this).find('.list-item-link');
		allLink.on('click', function() {		
			var $this = $(this),
				menu = $this.next('.wl-list'),
				parentMenu = $this.parents('.wl-list');
				allMenus = $('.wl-list');
				parentMenuLink = $this.closest('.wl-list').prev('.sub-menu-link');
			if($this.hasClass('is-active')) {
				$this.toggleClass('is-active');
				menu.toggleClass('is-expanded');	
				parentMenuLink.toggleClass('is-active');
			} else {
				allMenus.removeClass('is-expanded');
				allLink.removeClass('is-active');
				parentMenu.toggleClass('is-expanded');
				$this.toggleClass('is-active');
				menu.toggleClass('is-expanded');
			};
		});
	});
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





