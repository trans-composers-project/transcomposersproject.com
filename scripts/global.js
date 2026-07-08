const menu = document.getElementById("main-menu");
const hamburger = document.getElementById("hamburger");
const menuBreakpointWidth = 560;
// const menuItems = document.querySelectorAll(".menu-item");
// const closeIcon = document.querySelector(".close-icon");
// const menuIcon = document.querySelector(".menu-icon");

hamburger.addEventListener("click", () => {
	if (menu.classList.contains("show-menu")) {
		menu.classList.remove("show-menu");
	} else {
		menu.classList.add("show-menu");
	}
});

// for some reason, `ntl dev` seems to run this
// but `npx @11ty/eleventy --serve` doesn't
window.addEventListener("resize", () => {
	if (
		window.innerWidth > menuBreakpointWidth &&
		menu.classList.contains("show-menu")
	) {
		menu.classList.remove("show-menu");
	}
});
