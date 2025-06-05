// Khởi tạo các thành phần khi trang đã tải xong
document.addEventListener('DOMContentLoaded', function() {
  // Khởi tạo AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init();
  }

  // Khởi tạo Owl Carousel nếu có phần tử carousel
  if (typeof jQuery !== 'undefined' && jQuery.fn.owlCarousel) {
    jQuery('.property-list-img-area').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      items: 6,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      autoplay: true,
      smartSpeed: 2000,
      autoplayTimeout: 3000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
      }
    });
  }

  // Khởi tạo Swiper nếu có phần tử swiper
  if (typeof Swiper !== 'undefined') {
    var swiper = new Swiper(".myswiper1", {
      loop: true,
      slidesPerView: 1,
      grabCursor: true,
      speed: 1000,
      fadeEffect: {
        crossFade: true
      },
      watchSlidesProgress: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});