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

	//on click of "code" button
	$(".success").on("touchend", function() {		
		//grab the html of our parents previous siblings child, which is the name of our animation. like "hinge".
		var name = ($(this).parent().prev().children().html());

		//grad the contents of the iframe, which is just our big animate.css file
		var code = $("iframe").contents().find("pre").html();

		//find where our name is in the code, and grab the substring from the first instance of the name to the last instance
		//plus and minus the appropriate number of characters to grab the whole code block
		var result = code.substring(code.indexOf(name)-19, code.lastIndexOf(name)+name.length+3);

		//put that grabbed result into our textarea
		$("textarea").html(result);
	});


	//put our animate.css file into the iframe, so that we can access it through the DOM
	//we use location.host here because in order to do iframe stuff you need to be on a webserver.
	//just grab from the address we're at.
	$("iframe").attr("src","http://"+location.host+"/stylesheets/animate.css");

	//within <nav>, there's a btn group. sets state via data attr.
	$("nav .button-group .button").on("touchend",function(){
		$("nav").attr("data-catactive",$(this).attr("data-mycat"));
	});

}

