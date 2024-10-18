
const hamburger = document.getElementById('menuIcon')
const midBar = document.querySelector('.midBar')

hamburger.addEventListener('click', e => {
    e.preventDefault
    midBar.classList.toggle('.active')
    console.log('hello')
})