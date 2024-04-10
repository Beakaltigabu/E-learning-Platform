/* Navbar Style on Scroll */

/**
 * Adds or removes the 'window-scroll' class from the navigation element based on the scroll position.
 */
const arrow_function = () => {
  const navigation = document.querySelector('nav');
  const isScrolled = window.scrollY > 0;
  navigation.classList.toggle('window-scroll', isScrolled);
};
window.addEventListener('scroll', arrow_function);



/* Show/Hide FAQs Question */

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
  faq.addEventListener( "click", ()=> {
    faq.classList.toggle('open');


    /* Change Icon */
    const icon=faq.querySelector('.faq-icon i');
    if(icon.className==='fa-solid fa-plus'){
      icon.className= 'fa-solid fa-minus';
    }else{
      icon.className= 'fa-solid fa-plus';
    }
  } );
});


          /* Sliders */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //when window width is >= 600px

  breakpoints:{
    600:{
      slidesPerView:2
    }
  }
});



             /* show/hide nav menu */
const menu=document.querySelector(".nav_menu");
const menuBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', ()=> {
  menu.style.display="flex";
  closeBtn.style.display= "inline-block";
  menuBtn.style.display= "none";
})

const closeNav=()=>{
  menu.style.display="none";
  closeBtn.style.display= "none";
  menuBtn.style.display= "inline-block";
}

closeBtn.addEventListener('click', closeNav)
