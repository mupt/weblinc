
// wait for dom to load
$(document).ready(function() {
	//scoping the function, each wl-item is to be treated differently
	$('.wl-item').each(function (i) { 
		// set $this as variable to avoid jumping back into DOM
		var $this = $(this),
		// setting mainimage equal 
		mainimage = $this.find( $('.wl-thumbnail') );
		//defining what a swatch is, equal to IMG elements under a class of .swatches
		$swatch = $this.find('.swatch_list a');
		//on-click event for clicking on a swatch
		$swatch.on('click', function() {	
	
  			//src = this attribute(src) value of x
  			var src = $(this).data('src'),
  			//mainimage_source = "src" to be changed
  			mainimage_source = mainimage.attr("src");
  			// if the mainimage_source is not equal to the source of the clicked swatch change it
  			if (mainimage_source != src ) {
  				//passing attr function src attribute and SRC variable
				mainimage.attr('src', src); 
				// console.log('not equal, change it');
				} else {
				// console.log('equal, dont change anything');				
				return;							
			}
		});
	});		
});

// Provide Click functionality for drop-down menu


// Wait for DOM to load
$(document).ready(function(){
	//iterate only through .wl-navigation and it's children
	$('.wl-navigation').each(function() {
		//set $this equal for re-use to avoid jumping back into DOM
		var $this = $(this),
			//set SubList variable = to any element with a class .sub-menu
			$subLists = $this.find('.sub-menu'),
			//set Anchors = to any sibling occuring 1 step above the sublist
			$anchors = $subLists.prev('.list-item');
		//when you click the anchor run this function
		$anchors.on('click', function(e){
			//nullify default on-click behavior to avoid jumping to top of page
			e.preventDefault();
			//scope this to this anchor
			var $thisAnchor = $(this),
			//scope target to this anchor
				$thisSubLists = $thisAnchor.find('+ .sub-menu');
			//remove is-inactive from UL
			$thisSubLists.toggleClass('is-inactive');
			//add is-active to anchor tag
			$thisAnchor.toggleClass('is-active');
		});
	});
})

// Additional logic needed for this to work properly
// Need to remove active class from closest anchor tag vertically up in the DOM so that the pink active state is transferred
// to the menu item that is most recently clicked.
//----
// Need to ensure that the second level of navigation collapses when the top level is clicked.  All active states underneath 
//that ul need to lose their active state or toggle back to inactive









