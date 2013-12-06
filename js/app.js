// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/*
// Our main run-time function. body onload();
*/
function main(){	

	//<nav> sets category state via data attr.
	$("nav .button").on("touchend",function(){
		$("nav").attr("data-catactive",$(this).attr("data-mycat"));
	});

	/* 
	// Templatized Animators
	// --Find [target], add/remove class [animation(s)]
	*/
	$(".trigger.animator").on("touchend",function(){	
		var target = $(this).attr("data-target");
		var animObj = $(this).parent().siblings(".execParent").children("."+target);
		var animClass = $(this).attr("data-anims");
		var animDur = $(this).attr("data-dur");
		AddRmClass(animObj,animClass,animDur);
	});


}

function AddRmClass(Obj,className,duration){
	if(!Obj.hasClass("ImAnimating")){
		Obj.addClass(className+" ImAnimating");//add our animations
		setTimeout(function(){//delay
		Obj.removeClass(className+" ImAnimating");//remove our anims
		},duration);	
	}
}

