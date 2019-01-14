/*
 * BG Loaded
 * 
 *
 * Copyright (c) 2014 Jonathan Catmull
 * Licensed under the MIT license.
 */
 
 (function($){
 	$.fn.bgLoaded = function(custom) {

 		var self = this;

	// Default plugin settings
	var defaults = {
		afterLoaded : function(){
			this.addClass('bg-loaded');
		},
		doneAllLoaded : function(){
			alert('All done loaded...');
		}
	};

		// Merge default and user settings
		var settings = $.extend({}, defaults, custom);
		
		// Count background-image
		var bgImgsCount = 0;
		
		// Count background-image done loaded
		var bgImgsCountLoaded = 0;
		
		// Loop through element
		self.each(function(){
			var $this = $(this),
				bgImgs = $this.css('background-image').split(', ');
			$this.data('loaded-count',0);

			$.each( bgImgs, function(key, value){
				var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
				$('<img/>').attr('src', img).load(function() {
					bgImgsCountLoaded = bgImgsCountLoaded + 1;
					$(this).remove(); // prevent memory leaks
					$this.data('loaded-count',$this.data('loaded-count')+1);
					if ($this.data('loaded-count') >= bgImgs.length) {
						/*settings.afterLoaded.call($this);*/
					}
					if (bgImgsCountLoaded >= bgImgsCount) {
						settings.doneAllLoaded.call($this);
					}
					
					var done_percent = ( bgImgsCountLoaded / bgImgsCount ) * 100;
					$('#loading .amount').html(parseInt(done_percent)+'%');
					$('.loading .loading-logo .loading-logo-1').css('height',parseInt(done_percent)+'%');
					
				});
			});
			bgImgsCount = bgImgsCount + 1;
		});
	};
})(jQuery);