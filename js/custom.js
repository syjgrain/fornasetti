'use strict'

window.addEventListener("scroll", () => {
    let pageYOffset = window.pageYOffset + screen.height / 2;

    document.querySelectorAll("section").forEach(elem => {
        if (pageYOffset > elem.offsetTop) {
            elem.classList.add("on");
        } else {
            elem.classList.remove("on");
        }
    });
});
const navbarMenu = document.querySelector('.gnb');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    
    scrollIntoView(link);

});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}

const home = document.querySelector('#visual');
const homeHeight = home.getBoundingClientRect().height;

const arrow = document.querySelector('.arrow_up');
arrow.addEventListener('click', () =>{
    scrollIntoView('#header');
});


document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrow.classList.add('active');
    }else{
        arrow.classList.remove('active');
    }
});