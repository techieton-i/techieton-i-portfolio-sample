
const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');


let showMenu = false;

menuBtn.addEventListener('click', () => {
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamBurger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
});


/*function toggleMenu() {
    if(!showMenu){
        hamBurger.classList.add('open');


        showMenu = true;
    }else{
        hamBurger.classList.remove('open');


        showMenu = false;
    }
}


/*const menuBtn = document.querySelector('.menuBtn');
const hamBurger = document.querySelector('.menu-btn_burger');

let showMenu  = false;

menuBtn.addEventListener('click' , toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamBurger.classList.add('open');


        showMenu = false;
    }else{
        hamBurger.classList.remove('open');


        showMenu = true;
    }
}  */