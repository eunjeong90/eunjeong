$(function(){
  //메인 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
     delay: 5000,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  //메인투데이스크리닝탭메뉴
  $('.item_tabs li').click(function(){
    var tabId=$(this).attr('data-tab');

    $('.item_tabs li').removeClass('current');
    $('.screeing_time').removeClass('current');

    $(this).addClass('current');
    $("#"+tabId).addClass('current');

  });  


});