(function($) {
    "use strict";
	$('#container').showmore({
		closedHeight: 200,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('#container1').showmore({
		closedHeight: 350,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('#container2').showmore({
		closedHeight: 280,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('.hide-details').showmore({
		closedHeight: 115,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button1',
		animationSpeed: 0.5
	});
	if (document.documentElement.clientWidth < 900) {
		$('#container1').showmore({
			closedHeight: 450,
			buttonTextMore: 'Show more',
			buttonTextLess: 'Close',
			buttonCssClass: 'showmore-button',
			animationSpeed: 0.5
		});
	}

	var priceEl = $("#price");
	var activeCurrency = priceEl.data("active-currency");
	var startValue = priceEl.data("start-value");
	var endValue = priceEl.data("end-value");
	var selectedRange = priceEl.data("current-range").split("-");
	
	function convertToHumanReadable(input) {
		// Convert the input to a numerical value
		var number = parseFloat(input);
	
		// Check if the conversion was successful
		if (!isNaN(number)) {
			// Apply formatting to the numerical value using toLocaleString()
			return number.toLocaleString();
		} else {
			// If the input couldn't be converted to a number, return an error message
			return "Invalid input";
		}
	}
	
	$("#mySlider").slider({
		range: true,
		min: startValue,
		max: endValue,
		step: 1000,
		values: [ selectedRange[0], selectedRange[1] ],
		slide: function( event, ui ) {
			priceEl.val( activeCurrency + convertToHumanReadable(ui.values[ 0 ]) + " - " + activeCurrency + convertToHumanReadable(ui.values[ 1 ]) );
		}
	});

	priceEl.val( activeCurrency + $( "#mySlider" ).slider( "values", 0 ) +
	" - " + activeCurrency + $( "#mySlider" ).slider( "values", 1 ) );
})(jQuery);