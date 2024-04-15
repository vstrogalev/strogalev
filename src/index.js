import './sass/style.scss';

document.addEventListener('DOMContentLoaded', function () {
	// hamburger -> menu open close
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		menuClose = document.querySelector('.menu__close'),
		overlayClose = document.querySelector('.menu__overlay');

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
	});

	menuClose.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	overlayClose.addEventListener('click', () => {
		menu.classList.remove('active');
	});

	// Fill percentage bars in the skills section
	const levelItems = document.querySelectorAll('.skills__level-percent'),
		levelProgressFront = document.querySelectorAll('.skills__level-progressFront');

	levelItems.forEach((item, i) => {
		levelProgressFront[i].style.width = item.innerHTML;
	});

	document.querySelector('#contactForm').addEventListener('submit', function(e){
		return false;
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('form').trigger('reset');
		});
		return false;
	});

	validateForm('#contactForm');

	// Form validation
	function validateForm(formSelector) {
		// document.querySelector(formSelector).validate({
		// 	rules: {
		// 		userName: {
		// 			required: true,
		// 			minlength: 2
		// 		},
		// 		userMessage: {
		// 			required: true,
		// 			minlength: 5
		// 		},
		// 		userEmail: {
		// 			required: true,
		// 			email: true
		// 		},
		// 		policyAgree: "required"
		// 	},
		// 	messages: {
		// 		userName: {
		// 			required: "Пожалуйста, введите свое имя",
		// 			minlength: jQuery.validator.format("Введите {0} символа!")
		// 		},
		// 		userEmail: {
		// 			required: "Пожалуйста, введите свою почту",
		// 			email: "Неправильно введен адрес почты"
		// 		},
		// 		userMessage: "Пожалуйста, введите своё сообщение",
		// 		policyAgree: "Пожалуйста, согласитесь с политикой конфиденциальности"
		// 	}
		// });
	}
});
