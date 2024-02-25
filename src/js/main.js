const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const liMobileItems = document.querySelectorAll('.nav-mobile__list-item');
const footerYear = document.querySelector('.footer__year');
const allSections = document.querySelectorAll('.section');
const navBtnBars = document.querySelector('.burger-btn__bars');

const firstModal = document.querySelector('.card-modal-first');
const secondModal = document.querySelector('.card-modal-second');
const thirdModal = document.querySelector('.card-modal-third');

const btnShowModalFirst = document.querySelector('.card-link-first');
const btnShowModalSecond = document.querySelector('.card-link-second');
const btnShowModalThird = document.querySelector('.card-link-third');

const btnHideModal = document.querySelectorAll('.card-modal-btn');

const handleMobileNav = () => {
	navMobile.classList.toggle('show-nav-mobile');
	navBtnBars.classList.add('black-bars-color');
	document.body.classList.toggle('body-overflow');

	liMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('show-nav-mobile');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const hideModal = () => {
	btnHideModal.forEach((button) => {
		button.addEventListener('click', () => {
			button.closest('.card-modal').classList.remove('show-modal');
		});
	});
};

burgerBtn.addEventListener('click', handleMobileNav);
window.addEventListener('scroll', handleObserver);

btnShowModalFirst.addEventListener('click', () => {
	firstModal.classList.add('show-modal');
	hideModal();
});

btnShowModalSecond.addEventListener('click', () => {
	secondModal.classList.add('show-modal');
	hideModal();
});

btnShowModalThird.addEventListener('click', () => {
	thirdModal.classList.add('show-modal');
	hideModal();
});
