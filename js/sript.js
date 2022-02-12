new Swiper('.swiper',{
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    loop:true,
    effect:'cube',
    speed:1500,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination: { //добовляем булиты
        el: '.swiper-pagination', //добовляем елемент
        type: 'bullets', //добовляем тип 
        clickable: true, //добовляем нажатие
        dynamicBullets: true, //добовляем трансформацию булитов
    },    
});

function openClouseMenu() {
    let hamburger = document.querySelector("#hamburger");
    let navElements = document.querySelector("#navElements");
    hamburger.onclick = function() {
        hamburger.classList.toggle('hamburger_active'); 
        navElements.classList.toggle('nav__elements_active');
    }
}
openClouseMenu();