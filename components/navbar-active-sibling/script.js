$(document).on("click", "ul li.navitem", function(){
	$(this).addClass('active').siblings().removeClass('active');
})