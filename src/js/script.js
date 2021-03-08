const   hamburger   = document.querySelector('.hamburger'),
        menu        = document.querySelector('.menu'),
        menuClose   = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
});

const levelItems = document.querySelectorAll('.skills__level-percent'),
    levelProgressFront = document.querySelectorAll('.skills__level-progressFront');

levelItems.forEach((item, i) => {
    levelProgressFront[i].style.width = item.innerHTML;
})