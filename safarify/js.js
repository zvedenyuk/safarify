$(document).ready(function() {
	$(".safarify").wrap('<div class="safarifyContainer"></div>');
	$(".safarifyContainer").prepend('<img class="safarifyBrowser" src="safarify/safarifyBrowser.png" />');
    var stylesContainer = {
    	"float":"left",
    	"width":"1px",
    	"display":"table",
    	"height":"1px",
    	"box-shadow": "0px 10px 20px 5px rgba(0,0,0,.6)"
    };
    var stylesBrowser = {
    	"width":"100%"
    };
	$(".safarifyContainer").css(stylesContainer);
	$(".safarifyBrowser").css(stylesBrowser);
	
	setTimeout(function(){if($(".safarifyContainer").width()>0) $(".safarifyContainer").width($(".safarifyContainer").width());}, 1000); // This is because box-shadow doesn't work properly in Safari when we haven't set width
});