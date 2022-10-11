const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	menuCover = document.querySelector('.menu-cover'),
	closeMenu = document.querySelector('.menuclose');

burger.addEventListener('click', () => {
	menu.classList.add('menu_active');
	menuCover.classList.add('menu-cover_active');
});

closeMenu.addEventListener('click', () => {
	menu.classList.remove('menu_active');
	menuCover.classList.remove('menu-cover_active');
});

menuCover.addEventListener('click', () => {
	menu.classList.remove('menu_active');
	menuCover.classList.remove('menu-cover_active');
});