
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
				
				//do nuthin'
				} else {

					// console.log('equal, dont change anything');
					
					return;
				
				}

			});

	});		

})
