document.addEventListener('DOMContentLoaded', function(){
   const els = document.querySelectorAll('.header-nav__link');
   console.log(els);
   els.forEach(el => {
      el.addEventListener('mouseover', () => el.classList.add('change-color'));
      el.addEventListener('mouseout', () => el.classList.remove('change-color'));
   });
});
