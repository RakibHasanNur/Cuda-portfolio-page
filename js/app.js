// selecting elements
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// setting them to the task
hamburger.addEventListener('click', function () {
	// body...
	menu.classList.toggle('menu-show');
	hamburger.classList.add('show');
})