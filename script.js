document.addEventListener('DOMContentLoaded',function(){
	var navs = document.getElementsByClassName("nav");
	var navContent = document.getElementsByClassName("nav-content");
	var height = navs[0].clientHeight;
	for(var i = 0; i < navs.length; i++){
		navContent[i].style.transform = "translateY(" + (-i * height) + "px)"; 
	}

	window.onresize = function(){
		height = navs[0].clientHeight;
		var top = window.scrollY;
		for(var i = 0; i < navs.length; i++){
		navContent[i].style.transform = "translateY(" + (-i * height + top) + "px)"; 
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