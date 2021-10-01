'use strict';

AOS.init({
	once:true
});

var lightbox = new SimpleLightbox('.wedding__1__gallery a', {
	// animationSpeed: 750,
	// swipeClose: true,
	// doubleTapZoom: 2,
	// navText: ['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
	// closeText: '<i class="icofont-close-line"></i>'
});

function cdtd() {
	var xmas = new Date("December 1, 2021 00:00:00");
	var now = new Date();
	var timeDiff = xmas.getTime() - now.getTime();
	if (timeDiff <= 0) {
        clearTimeout(timer);
    		// Run any code needed for countdown completion here
		    document.querySelector("#clockdiv").style.display="none";
			document.querySelector("#saleActive").style.display="none";
			document.querySelector("#saleEnded").style.display="block";
        }
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	  hours %= 24;
    minutes %= 60;
    seconds %= 60;
	document.getElementById("count__day").innerHTML = days;
	document.getElementById("count__hour").innerHTML = hours;
	document.getElementById("count__minute").innerHTML = minutes;
	document.getElementById("count__second").innerHTML = seconds;
	var timer = setTimeout('cdtd()',1000);
}
cdtd();

$(document).ready(function() {
    $("#my_audio").get(0).play();
});