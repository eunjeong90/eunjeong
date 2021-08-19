$(function() {

  //메인페이지 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //서브페이지 슬라이드
  $('.owl-carousel').owlCarousel({
    items: 6,
    loop:true,
    nav:true,
    margin:5
  });
  //서브 탭메뉴
  $('.slide_tab li').click(function() {
    var slideTabId=$(this).attr('data-tab');
    $('.slide_tab li').removeClass('current');
    $('.frame').removeClass('current');
    $(this).addClass('current');
    $("#"+slideTabId).addClass('current');
  });

});