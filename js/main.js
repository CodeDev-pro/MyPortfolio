const showMenu = (toggleId, navId) => {
    const toggleMenu = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggleMenu && nav) {
        toggleMenu.addEventListener("click", () => {
            nav.classList.toggle("active");
            toggleMenu.classList.toggle("active");
        });
    } 
}

showMenu("nav-toggle", "nav-menu");

const navItems = document.querySelectorAll(".nav__item");
const inputGroups = document.querySelectorAll(".input__group");

function selectInputElement() {
    inputGroups.forEach(i => i.classList.remove('active'));
    this.classList.add("active");
}

inputGroups.forEach(i => i.addEventListener("click", selectInputElement));

function linkAction() {
    navItems.forEach(n => n.classList.remove('active'));
    this.classList.add("active");
    $('#nav-toggle').removeClass("active");
    $('#nav-menu').removeClass("active");
}

navItems.forEach(n => n.addEventListener("click", linkAction));

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 180) {
            $(".l-header").removeClass("active");
            $(".nav__item").removeClass("scrolled_up");
            $(".nav__logo").removeClass("active");
            $(".nav__link").removeClass("scrolled_up");
            $(".nav__toggle").removeClass("scrolled_up");
        } else {
            $(".l-header").addClass("active");
            $(".nav__item").addClass("scrolled_up");
            $(".nav__logo").addClass("active");
            $(".nav__link").addClass("scrolled_up");
            $(".nav__toggle").addClass("scrolled_up");
        }
        if(this.scrollY > 500) {
            $(".scroll__up-btn").addClass("show")
        } else {
            $(".scroll__up-btn").removeClass("show")
        }
    })
});

$(".scroll__up-btn").click(function(){
    $('html').animate({scrollTop: 0});
});

//scrollreveal
const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srTop.reveal('.home__title', {});
srTop.reveal('.button', { delay: 200 });

srTop.reveal('.section-title', {});
srTop.reveal('.about__img', { delay: 200 });
srTop.reveal('.about__data', { delay: 400 });

srTop.reveal('.section-title', {});
srTop.reveal('.skills__data', { interval: 200, delay: 400 });
srTop.reveal('.skills__info', { delay: 200 });
srTop.reveal('.skills__image', { delay: 200 });

srTop.reveal('.services__card', { interval: 200, delay: 400 });
srTop.reveal('.work__card', { interval: 200, delay: 200 });

srTop.reveal('.contact-title', {});
srTop.reveal('.input__group', { interval: 200, delay: 200 });
srTop.reveal('.input__box', { delay: 400 });

srTop.reveal('.about__text', { delay: 200 });
srTop.reveal('.contact__contacts-card', { delay: 400, interval: 200 });
srTop.reveal('.contact__card', { delay: 600, interval: 200 });




