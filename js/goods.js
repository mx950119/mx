< script type = "text/javascript" src = "js/jquery-1.7.2.min.js" > < /script> 
<script type = "text/javascript" >
	$(function() {
		$('.small').mousemove(function(e) {
			$('b').show();
			$('.big').show();
			var L = e.pageX;
			var l = $(this).offset().left;
			var left = L - l - 50;

			var T = e.pageY;
			var t = $(this).offset().top;
			var top = T - t - 50;

			left = left < 0 ? 0 : left;
			left = left > 300 ? 300 : left;
			top = top < 0 ? 0 : top;
			top = top > 300 ? 300 : top;

			$('b').css({
				left: left,
				top: top
			});

			var imgLeft = -left * 2;
			var imgTop = -top * 2;
			imgLeft = imgLeft < -400 ? -400 : imgLeft;
			imgTop = imgTop < -400 ? -400 : imgTop;

			$('.big img').css({
				left: imgLeft,
				top: imgTop
			});
		});

		$('.small').mouseout(function() {
			$('.small b').hide();
			$('.big').hide();
		});
	}) </script>