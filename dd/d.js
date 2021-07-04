const menu = document.querySelector('#mobile-menu');
const menulink = document.querySelector('.navbar__menu');
const navlogo = document.querySelector('#navbar__logo')

const mobilemenu = () => {
    menu.classList.toggle('is-active');
    menulink.classList.toggle('active');
};

menu.addEventListener('click', mobilemenu);

const highlightmenu = () => {
    const elem = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home-page');
    const aboutmenu = document.querySelector('#about-page');
    const servicesmenu = document.querySelector('#services-page');
    let scrollpos = window.scrollY



    if (window.innerWidth > 960 && scrollpos < 600) {
        homemenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollpos < 1400) {
        aboutmenu.classList.add('highlight');
        homemenu.classList.remove('highlight');
        servicesmenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollpos < 2345) {
        servicesmenu.classList.add('highlight');
        aboutmenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollpos < 600) || elem) {
        elem.classList.remove('highlight');
    }

};

    window.addEventListener('scroll',highlightmenu);
    window.addEventListener('click',highlightmenu);


const hidemobilemenu = () => {
        const menubars = document.querySelector('.is-active')
    if (window.innerWidth < 768 && menubars) {
        menu.classList.toggle('is-active');
        menulink.classList.remove('active');
    }
};

menulink.addEventListener('click',hidemobilemenu);
navlogo.addEventListener('click',hidemobilemenu);


