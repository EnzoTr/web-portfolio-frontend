let lightSwitch = document.getElementById('light-switch');

function darkMode(){
    if(lightSwitch.classList.contains('fa-moon')){
        lightSwitch.classList.remove('fa-moon');
        lightSwitch.classList.add('fa-sun');
    }else{
        lightSwitch.classList.remove('fa-sun');
        lightSwitch.classList.add('fa-moon');
    }

    document.body.classList.toggle('dark-theme');
}

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000, // Cambia cada 5 segundos
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});