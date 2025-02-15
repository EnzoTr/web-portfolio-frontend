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

(function(){
    const listElements = document.querySelectorAll('.nav-item--show');
    const list = document.querySelector('.links-container');
    const menu = document.querySelector('.ham');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click',()=>{

                let subMenu = element.children[1]
                let height = 0;
                element.classList.toggle('menu-item--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }


    const deleteStyleHeight = ()=>{
        listElements.forEach(element =>{
            if(element.children[1].getAttribute ('style')){
                element.children[1].removeAttribute ('style');
                element.classList.remove('menu-item--active');
            }
        })
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth > 1200) {
            deleteStyleHeight();
            if (list.classList.contains('links-container--show')) {
                list.classList.remove('links-container--show');
            }
    
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 1200) {
        addClick();
    }

    menu.addEventListener('click',()=>{
        list.classList.toggle('links-container--show')
    })

})();  