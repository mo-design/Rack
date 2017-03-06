 (function($){
	
	var defaults = { picStep: 1 };
	
	$.fn.slider = function(options){
	
	var settings = $.extend({}, defaults, options);
	
	var pixelsOffset = 225*options.picStep;
	var leftUIEl = $('.carousel-arrow-left');
	var	rightUIEl = $('.carousel-arrow-right');
	var elementsList = $(this);
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }; 

    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= pixelsOffset;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        };
		
		if (currentLeftValue < (minimumOffset+pixelsOffset*4)){
			currentLeftValue = 0;
			elementsList.animate({ left : currentLeftValue + "px"}, 500);
		};
			
    });
	
	return this;
	
	};
})(jQuery);