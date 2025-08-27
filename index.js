// mobile nav

const menuIcon = document.getElementById('menu-input')
const mobileMenu = document.querySelector('.mobile-menu')

menuIcon.addEventListener('change', (e) => {
    if (e.target.checked) {
        mobileMenu.style.visibility = "visible"; 
        mobileMenu.classList.remove('close')
        mobileMenu.classList.add('open')
    } else {
        mobileMenu.classList.remove('open')
        mobileMenu.classList.add('close')
        mobileMenu.addEventListener('animationend', (e) => {
          if (mobileMenu.classList.contains('close')) {
            mobileMenu.style.visibility = 'hidden';
          }
        });

    }
})
