const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function() {
  //タイピングアニメーション
  $('.hero-title').typed({
    strings: ["Welcome to My PC Shop", "Let's scroll down."],
    typeSpeed: 50,
    startDelay: 0,
    backSpeed: 5,
    loop: false,
    loopCount: 1,
    showCursor: true,
    backDelay: 500
  });
});
$('.navbar-toggler').click(function() {
  $('.menu').toggleClass('menu-open');
  $('.menu-icon').toggleClass('menu-open');
  $('body').toggleClass('menu-open');
  $('.content').toggleClass('menu-open');
});

