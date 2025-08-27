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
const heartCountShow = document.querySelectorAll('.heart-count-text')
let heartCount = 0;

heartIcon.forEach((icon)=>{
  icon.addEventListener('click',(e)=>{
    heartCount++
    heartCountShow.forEach((text)=>{
      text.innerText = heartCount
    })
  })
})

// call button functionality

function getCurrentTime(){
  const now = new Date()
  const time = now.toLocaleTimeString('en-US' , {
    hour : 'numeric',
    minute : '2-digit',
    second : '2-digit',
    hour12 : true
  })
  return time.toLocaleLowerCase()
}

const callButtons = document.querySelectorAll('.btn-call')
const coinCountText = document.querySelectorAll('.coin-count-text')
let coinCount = 100;

callButtons.forEach((callBtns)=>{
  callBtns.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(coinCount>=20){
      let phoneNumber = e.target.parentElement.parentElement.childNodes[5].innerText
      let serviceName = e.target.parentElement.parentElement.childNodes[3].childNodes[1].innerText
      alert(`Calling ${serviceName} on ${phoneNumber}...`)

      let historyLi = document.createElement('li')
      historyLi.classList.add('call-history-item')

      let historyDivLeft = document.createElement('div')
      historyDivLeft.classList.add('history-item-left')
      let serviceTitle = document.createElement('p')
      let serviceNum = document.createElement('p')
      serviceTitle.classList.add('history-item-title')
      serviceNum.classList.add('history-item-number')
      serviceTitle.innerText = serviceName
      serviceNum.innerText = phoneNumber
      historyDivLeft.appendChild(serviceTitle)
      historyDivLeft.appendChild(serviceNum)
      historyLi.appendChild(historyDivLeft)

      let historyDivRight = document.createElement('div')
      historyDivRight.classList.add('history-item-right')
      let timeText = document.createElement('p')
      timeText.classList.add('call-history-time')
      timeText.innerHTML = getCurrentTime()
      historyDivRight.appendChild(timeText)
      historyLi.appendChild(historyDivRight)

      const historyList = document.getElementsByClassName('call-history-list')
      historyList[0].appendChild(historyLi)

      coinCount = coinCount - 20
      coinCountText.forEach((text)=>{
        text.innerText = coinCount
      })
    } else {
      alert ('You don\'t have sufficient coin, minimum 20 coin is required to make a call')
    }
  })
})