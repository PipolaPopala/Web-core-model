const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiper = document.querySelector('.swiper');
const btnShow = document.querySelector('.btn-show');
const btnShowIcDown = document.querySelector('.btn-show__ic-down');
const brandWrapper = document.querySelector('.swiper-wrapper');
const btnShowText = document.querySelector('.btn-show__btn-text');

document.addEventListener('DOMContentLoaded', () => {
const width = window.innerWidth
if (width < 500){
    const slider = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.15,
        spaceBetween: 16,
        freeMode: true,
    });
} else {
    swiperWrapper.classList.add('brand-wrapper');
    btnShow.classList.remove('visually-hidden');
    swiper.classList.remove('swiper-container');
}
});

btnShow.addEventListener('click', btnShowClickRotate);
btnShow.addEventListener('click', btnShowClickText);
btnShow.addEventListener('click', btnShowClickHeigth);

function btnShowClickRotate() {
    console.log('clickRotate');
    if (btnShowIcDown.style.transform == "rotate(0deg)") {
        return btnShowIcDown.style.transform = "rotate(180deg)"
    };
    if (btnShowIcDown.style.transform == "rotate(180deg)") {
        return btnShowIcDown.style.transform = "rotate(0deg)"
    };
}
function btnShowClickText() {
    console.log('clickText');
    if (btnShowText.textContent == "Показать все") {
        return btnShowText.textContent = "Скрыть"
    };
    if (btnShowText.textContent == "Скрыть") {
        return btnShowText.textContent = "Показать все"
    }
}
function btnShowClickHeigth() {
    console.log('clickHeigth');
    if (brandWrapper.style.maxHeight == "170px") {
        return brandWrapper.style.maxHeight = "100%"
    };
    if (brandWrapper.style.maxHeight == "100%") {
        return brandWrapper.style.maxHeight = "170px"
    };
}