/*
// Our main run-time function. body onload();
*/
function main(){	

	/*
	// Basic Animator. Add/Removes class of .animated to our sibling .exec
	*/
	$(".trigger").on("touchend",function(){
		// find sib
		var animObj = $(this).parent().siblings(".large-8").children(".exec");
		// add/remove anim class
		animObj.addClass("animated");
		setTimeout(function(){
		animObj.removeClass("animated");
		},2500);
	});


	$(".success").on("touchend", function() {		
		var name = ($(this).parent().prev().children().html());
		var code = $("iframe").contents().find("pre").html();
		var result = code.substring(code.indexOf(name)-19, code.lastIndexOf(name)+name.length+3);
		$("textarea").html(result);
	});



	$("iframe").attr("src","http://"+location.host+"/stylesheets/animate.css");

	//within <nav>, there's a btn group. sets state via data attr.
	$("nav .button-group .button").on("touchend",function(){
		$("nav").attr("data-catactive",$(this).attr("data-mycat"));
	});

}

