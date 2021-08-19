$(function(){

    //서브페이지 슬라이드
    $('.owl-carousel').owlCarousel({
      items: 5,
      loop:true,
      nav:true,
      margin:10
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