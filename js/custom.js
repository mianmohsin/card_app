$(document).ready(function(){
	customScript.init();
});

var customScript = {
	init: function(settings){
		this.settings = settings;
		var orientation;
		var bg_color;
		var active_index;

		$(".tinderslide").jTinder({
		    onDislike: function (item) {		    	
		    	$(".matches .item .fade-color").css({"background": "transparent"});
		    },			
		    onLike: function (item) {
		    	$(".matches .item .fade-color").css({"background": "transparent"});
		    },
			animationRevertSpeed: 200,
			animationSpeed: 400,
			threshold: 1,
			likeSelector: '.like',
			dislikeSelector: '.dislike'
		});
		$(".swiper").css("height", $(".matches .item").innerHeight());
				
		$(".button-prev").on("click", function(){
			$(".tinderslide").jTinder($(this).attr("data-status"));
			//$(".matches .item .fade-color").css({"background": "red"});
		});
		$(".button-next").on("click", function(){
			$(".tinderslide").jTinder($(this).attr("data-status"));
			//$(".matches .item .fade-color").css({"background": "green"});	
		});
	}
}