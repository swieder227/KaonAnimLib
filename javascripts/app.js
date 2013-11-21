/*
// Our main run-time function. body onload();
*/
function main(){	

	/*
	// Basic Animator. Add/Removes class of .animtor w/ same data attr
	*/
	$(".trigger").on("touchend",function(){
		// var animName = $(this).attr("data-anim");

		// var animObj = $(".animated[data-anim='"+animName+"']");

		// animObj.removeClass(animName);


		var animObj = $(this).parent().siblings(".large-8").children(".exec");
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
}

