const navbar = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtn2 = document.querySelector('#nav-btn-2')
const closeBtn = document.querySelector('#close-btn')
const sidebar = document.querySelector('#sidebar')
const fun = document.querySelector('#fun')
const weather = document.querySelector('#weather')
const links = document.querySelector('#links')
const social = document.querySelector('#social')
// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('navbar-fixed')
    fun.classList.add('fun')
    weather.classList.add('weather-js')
    links.classList.add('links-js')
    social.classList.add('social-js')
  } else {
    navbar.classList.remove('navbar-fixed')
    fun.classList.remove('fun')
    weather.classList.remove('weather-js')
    links.classList.remove('links-js')
    social.classList.remove('social-js')
  }
})
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})

navBtn2.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar')
})
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
