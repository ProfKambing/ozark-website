//j
window.addEventListener("scroll", function(){
  var navbar = document.querySelector('nav');
  navbar.classList.toggle("sticky-top", window.scrollY > 0)
})