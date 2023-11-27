
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0)
});

const faqs = document.querySelectorAll('.faq');
const feaBox = document.querySelector('.fea-box');
const infoBox = document.querySelector('.box123');


feaBox.addEventListener("click", () => {
    infoBox.classList.add("active");
});

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-caret-down'){
            icon.className = "fa-solid fa-arrow-up";
        }else{
            icon.className = "fa-solid fa-caret-down";
        }
    });
});

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click",()=>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});


const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav);