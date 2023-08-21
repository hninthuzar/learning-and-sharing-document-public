
window.addEventListener("scroll", function() {
	var header = document.querySelector("header");
	header.classList.toggle("sticky", this.window.scrollY > 0);
})