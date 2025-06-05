// Import required libraries
import 'bootstrap';
import 'aos';
import 'magnific-popup';
import 'owl.carousel';
import Swiper from 'swiper';

// Initialize AOS
AOS.init();

// Initialize Swiper
const swiper = new Swiper('.myswiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Initialize Owl Carousel
$('.property-list-img-area').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    }
  }
});