'use strict';
(function () {
	const hamburgerEl = document.querySelector('.hamburger-button');
	const menuEl = document.querySelector('.menu');

	// hamburgerEl.addEventListener('click', function () {
		hamburgerEl.addEventListener("click", () => {
		menuEl.classList.toggle('shown');
	});

	


})();
