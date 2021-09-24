const date = document.querySelector('#date')
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change')
  })
})

const icons = document.querySelectorAll('.section-1-icons i')
let i = 1

setInterval(() => {
  i++
  const icon = document.querySelector('.section-1-icons .change')
  icon.classList.remove('change')

  if (i > icons.length) {
    icons[0].classList.add('change')
    i = 1
  } else {
    icon.nextElementSibling.classList.add('change')
  }
}, 4000)

$(document).ready(function () {
  $('.hero-img').slick({
    autoplay: true,
    dots: true,
    speed: 1000,
  })
})
date.innerHTML = new Date().getFullYear()
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
  setInterval(loader, 3000)
}

window.onload = fadeOut()
