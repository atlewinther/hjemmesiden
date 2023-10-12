const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/* BG HEADER */
function scrollHeader(){
    const header = document.getElementById('header');
// when the scroll is greater than 50 vi
if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);