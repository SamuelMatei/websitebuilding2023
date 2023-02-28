var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true
})