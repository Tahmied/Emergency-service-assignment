// mobile nav
const menuIcon = document.getElementById('menu-input');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuIcon.addEventListener('change', (e) => {
    if (e.target.checked) {
        mobileMenu.style.display = "flex";
        setTimeout(() => {
            mobileMenu.classList.remove('close');
            mobileMenu.classList.add('open');
        }, 10);
    } else {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
        mobileMenu.addEventListener('animationend', (e) => {
            if (mobileMenu.classList.contains('close')) {
                mobileMenu.style.display = 'none';
            }
        }, {once: true});
    }
});

document.addEventListener('click', (e) => {
    if (menuIcon.checked && 
        !e.target.closest('.mobile-menu') && 
        !e.target.closest('.menu-icon-mobile')) {
        menuIcon.checked = false;
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('close');
        mobileMenu.addEventListener('animationend', (e) => {
            if (mobileMenu.classList.contains('close')) {
                mobileMenu.style.display = 'none';
            }
        }, {once: true});
    }
});


// heart icon functionality

const heartIcon = document.querySelectorAll('.heart-icon')
const heartCountShow = document.querySelector('.heart-count-text')
let heartCount = 0;

heartIcon.forEach((icon)=>{
  icon.addEventListener('click',(e)=>{
    heartCount++
    heartCountShow.innerText = heartCount
  })
})