"use strict";

var openSlide = document.querySelector(".btn-open"),
    closeSlide = document.querySelector(".btn-close"),
    sideMenu = document.querySelector("#side-menu"),
    main = document.querySelector("#main");

openSlide.addEventListener("click", function () {
	sideMenu.style.width = "250px";
	main.style.marginLeft = "250px";
});

closeSlide.addEventListener("click", function () {
	sideMenu.style.width = "0";
	main.style.marginLeft = "0";
});