const dots = document.querySelectorAll(".dot");
const track = document.querySelector(".slider__track");
let currentIndex = 0;

function updateSlider(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlider(currentIndex);
  });
});



let elMenuOpen = document.getElementById('menu-toggle').addEventListener('click', function() {
    let menu = document.getElementById('menu-mobile');
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      });
      
      document.getElementById('close-btn').addEventListener('click', function() {
        const menu = document.getElementById('menu-mobile');
        menu.style.display = 'none';
      });