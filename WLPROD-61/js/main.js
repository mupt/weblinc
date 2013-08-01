
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

// Nav Menu Sliding
$(document).ready(function(){
	//iterate only through .wl-navigation and it's children
	$('.wl-navigation').each(function() {
		//set $this equal for re-use to avoid jumping back into DOM
		var $this = $(this),
			//set SubList variable = to any element with a class .sub-menu
			$subLists = $this.find('.sub-menu'),
			//set Anchors = to any sibling occuring 1 step above the sublist
			$anchors = $subLists.prev('.list-item');

			$anchors.addClass('is-expandable');

		//when you click the anchor run this function
		$anchors.on('click', function(e){
			//nullify default on-click behavior to avoid jumping to top of page
			e.preventDefault();
			//scope this to this anchor
			var $thisAnchor = $(this),
			//scope target to this anchor
				$thisSubLists = $thisAnchor.find('+ .sub-menu');

			//if the anchor that is clicked on has a state of 'is-active' do the following
			if($thisAnchor.hasClass('is-active')) {
				//find every element with a class of is-expandable and toggle is-active
				$this
					.find('.is-expandable')
					.toggleClass('is-active');
					//add the class of inactive to sublists of the clicked anchor
				$thisSubLists.addClass('is-inactive');
				console.log("condition 1");

				//else if the sublist of the clicked anchor does NOT have a class of is-inactive (meaning it is active)
			} else if(!$thisSubLists.hasClass('is-inactive')) {
				//find all of the elements with .wl-list-items.sub.menu
				$this
					.find('.wl-list-items.sub-menu')
					//and change them ALL to is-inactive -- unexpand all open menus. 
					.addClass('is-inactive');
			} else {
				//if none of the previous conditions exist, remove the class is-active from everything, add it to the 
				//clicked anchor and remove -is-inactive from everything.
				$this
					.find('.is-expandable')
					.removeClass('is-active');
				$thisAnchor.addClass('is-active');
				$thisSubLists.removeClass('is-inactive');
			}

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



