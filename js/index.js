< script src = "js/IQuery.js" > < /script>
$(function() {
	var aBtn = $("#central_logo").find("ol").find("li");
	var oUl = $("#central_logo").find("ul");
	var aLi = oUl.find("li");
	oBtn.click(function() {
		oBtn.attr("className", "");
		$(this).attr("className", "active");
		oUl.animate({
			top: -240 * $(this).index()
		});
	})
})