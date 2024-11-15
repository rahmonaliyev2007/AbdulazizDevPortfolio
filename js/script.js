function scrollToSection1() {
    const targetElement = document.getElementById('section1');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    const targetElement = document.getElementById('contact');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }


  const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
let scrollInterval;


nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);


function startAutoScroll() {
    scrollInterval = setInterval(moveNext, 4000); 
}


function moveNext() {
    if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth - 200) {
        scrollAmount += carousel.clientWidth / 2;
    } else {
        scrollAmount = 0; 
    }
    carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}


function movePrev() {
    if (scrollAmount > 0) {
        scrollAmount -= carousel.clientWidth / 2;
    } else {
        scrollAmount = carousel.scrollWidth - carousel.clientWidth; 
    }
    carousel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
}


startAutoScroll();

nextBtn.addEventListener('click', () => {
    clearInterval(scrollInterval);
    startAutoScroll();
});
prevBtn.addEventListener('click', () => {
    clearInterval(scrollInterval);
    startAutoScroll();
});
