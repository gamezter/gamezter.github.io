document.addEventListener('DOMContentLoaded',function(){
	var navs = document.getElementsByClassName("nav");
	var navContent = document.getElementsByClassName("nav-content");
	var height = navs[0].offsetHeight;

	for(var i = 0; i < navs.length; i++){
			navContent[i].style.transform = "translateY(" + (-i * height) + "px)"; 
	}

	var content = document.getElementsByClassName("content");
	var navWrapper = document.getElementsByClassName("nav-wrapper");
	for(var i = 0; i < content.length; i++){
		var sides = window.innerWidth - content[i].offsetWidth;
		content[i].style.marginLeft = (sides / 2) + "px";
		navWrapper[0].style.marginLeft = (sides / 2) + "px";
	}

	window.onresize = function(){
		height = navs[0].offsetHeight;
		var top = window.scrollY;
		for(var i = 0; i < navs.length; i++){
		navContent[i].style.transform = "translateY(" + (-i * height + top) + "px)"; 
		}

		for(var i = 0; i < content.length; i++){
		var sides = window.innerWidth - content[i].offsetWidth;
		content[i].style.marginLeft = (sides / 2) + "px";
		navWrapper[0].style.marginLeft = (sides / 2) + "px";
	}
	}

	document.onscroll = function(){
		var top = window.scrollY;
		for(var i = 0; i < navs.length; i++){
			navs[i].style.transform = "translateY(" + (-top) + "px)";
			navContent[i].style.transform = "translateY(" + (-i * height + top) + "px)";
		}

	}
});