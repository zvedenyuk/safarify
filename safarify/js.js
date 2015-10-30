$(document).ready(function() {
	$(".safarify").wrap('<div class="safarifyContainer"></div>');
	$(".safarifyContainer").prepend('<img class="safarifyBrowser" src="safarify/safarifyBrowser.png" />');
	
	setTimeout(function(){if($(".safarifyContainer").width()>0) $(".safarifyContainer").width($(".safarifyContainer").width());}, 1000); // This is because box-shadow doesn't work properly in Safari when we haven't set width
});