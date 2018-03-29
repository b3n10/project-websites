const openSlide = document.querySelector(".btn-open"),
	closeSlide = document.querySelector(".btn-close"),
	sideMenu = document.querySelector("#side-menu"),
	main = document.querySelector("#main");

openSlide.addEventListener("click", () => {
	sideMenu.style.width = "250px";
	main.style.marginLeft = "250px";
});

closeSlide.addEventListener("click", () => {
	sideMenu.style.width = "0";
	main.style.marginLeft = "0";
});
