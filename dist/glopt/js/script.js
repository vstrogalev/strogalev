document.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.promo__nav-menu'),
		menuItem = document.querySelectorAll('.promo__nav-item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('promo__nav-menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('promo__nav-menu_active');
		})
	});

	new Swiper('.testimonials__wrapper', {
		navigation: {
			nextEl: '.testimonials-button-next',
			prevEl: '.testimonials-button-prev'
		},
		autoHeight: true,
		loop: true,
		speed: 800,
		spaceBetween: 45,
		slidesPerView: 3,
		effect: 'coverflow',
		coverflowEffect: {
			// Угол
			rotate: -20,
			// Наложение
			stretch: 20,
			// Тень
			slideShadows: false,
		},
		keyboard: {
			// Включить\выключить
			enabled: true,
			// Включить\выключить
			// только когда слайдер
			// в пределах вьюпорта
			onlyInViewport: true,
			// Включить\выключить
			// управление клавишами
			// pageUp, pageDown
			pageUpDown: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
			}
		},
	});
});