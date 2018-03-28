"use strict";

var sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right");

// select slide-1
var count = 1;

// only show image 1 on page load
reset(count);

function reset(count) {
	sliderImages.forEach(function (si) {
		return !si.className.includes("slide-" + count) ? si.style.display = "none" : si.style.display = "block";
	});
	return count;
}

arrowLeft.addEventListener("click", function () {
	count === 1 ? count += 2 : count--;
	count = reset(count);
});

arrowRight.addEventListener("click", function () {
	count === 3 ? count -= 2 : count++;
	count = reset(count);
});