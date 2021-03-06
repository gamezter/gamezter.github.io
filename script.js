$(document).ready(function(){
	var navs = document.getElementsByClassName("nav");
	var navContent = document.getElementsByClassName("nav-content");
	var height = window.innerHeight;

	var list = ["building nice websites.", "making fun games.", "solving difficult problems.", "going to pub quiz nights.", "working with talented people.", "playing well designed games.", "learning new things."];
	var currentId = 1;
	var current = $("<div class='item'></div>").html(list[currentId]);
	$("#ticker").prepend(current);

	setInterval(function(){
		currentId = (currentId + 1) % list.length;
		var next = $("<div class='item' style='top: -45px'></div>").html(list[currentId]);
		$("#ticker").prepend(next);
		next.animate({top : "0px"}, 'slow');
		current.animate({top: "45px"}, 'slow',function(){current.remove(); current = next;});
	}, 3000);

	var t;
	var firstTransparent = -100;
	var white = -50;
	var secondTransparent = 0;

	function animation(){
		$(".star-container").css({
			"border-image":"linear-gradient(to bottom right, transparent "+ firstTransparent +"%, white "+ white + "%, transparent "+ secondTransparent + "%)",
			"border-image-slice":"1"});
		if(white < 450){
			firstTransparent++;
			white++;
			secondTransparent++;
		}else{
			firstTransparent = -100;
			white = -50;
			secondTransparent = 0;
		}
		
		
		t = setTimeout(animation, 10);
	}
	animation();


	for(var i = 0; i < navs.length; i++){
		navs[i].style.transform = "translateY(" + (-window.scrollY) + "px)";
		navContent[i].style.transform = "translateY(" + (-i * height + window.scrollY) + "px)";
	}

	var content = document.getElementsByClassName("content");
	var navWrapper = document.getElementsByClassName("nav-wrapper");
	for(var i = 0; i < content.length; i++){
		var sides = window.innerWidth - content[i].offsetWidth;
		content[i].style.marginLeft = (sides / 2) + "px";
		navWrapper[0].style.marginLeft = (sides / 2) + "px";
	}

	window.onresize = function(){
		height = window.innerHeight;
		var top = window.scrollY;
		for(var i = 0; i < navs.length; i++){
			navContent[i].style.transform = "translateY(" + (-i * height + top) + "px)"; 
		}

		for(var i = 0; i < content.length; i++){
			var sides = window.innerWidth - content[i].offsetWidth;
			if(window.innerWidth > 1440){
				content[i].style.marginLeft = (sides / 2) + "px";
				navWrapper[0].style.marginLeft = (sides / 2) + "px";
			}else{
				content[i].style.marginLeft = "0px";
				navWrapper[0].style.marginLeft = "0px";
			}
		}
	}

	document.onscroll = function(){
		var top = window.scrollY;
		for(var i = 0; i < navs.length; i++){
			navs[i].style.transform = "translateY(" + (-top) + "px)";
			navContent[i].style.transform = "translateY(" + (-i * height + top) + "px)";
		}
	}
	$(".introButton").click(function() {
    	$('html,body').animate({
        	scrollTop: $("#intro").offset().top},
        	'slow');
	});
	$(".skillsButton").click(function() {
    	$('html,body').animate({
        	scrollTop: $("#skills").offset().top},
        	'slow');
	});
	$(".projectsButton").click(function() {
    	$('html,body').animate({
        	scrollTop: $("#projects").offset().top},
        	'slow');
	});
});
