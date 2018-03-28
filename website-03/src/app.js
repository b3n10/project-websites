const sliderImages = document.querySelectorAll(".slide"),
	arrowLeft = document.querySelector("#arrow-left"),
	arrowRight = document.querySelector("#arrow-right");

// select slide-1
let count = 1;

// only show image 1 on page load
reset(count);

function reset(count) {
	sliderImages.forEach(si => (!si.className.includes(`slide-${count}`)) ? si.style.display = "none" : si.style.display = "block" );
	return count;
}

arrowLeft.addEventListener("click", () => {
	(count === 1) ? count += 2 : count--;
	count = reset(count);
});

arrowRight.addEventListener("click", () => {
	(count === 3) ? count -= 2 : count++;
	count = reset(count);
});

