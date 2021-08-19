$(function() {
  //메인배경
  var ww, wh, bh;
  function init() {      //init=초기화함수네이밍
    ww=window.innerWidth;
    wh=window.innerHeight;
  
    bh=document.getElementById('main_bg'); //배경이미지영역
    bh.style.height=wh+'px';
  }
  init();
  //브라우저 크기가 변경되는 것을 감지하는 이벤트 리스너
  function el() {
    window.addEventListener('resize',init);
  }

    el();


  //해당영역 스크롤시 네비 색상값 변경
  var header=$('#header');
  var gnb=$('.gnb');
  var gnbPos=gnb.offset().top;
  console.log(gnbPos);
  
  $(window).scroll(function(){
    if($('html,body').scrollTop()>600){
      header.addClass('sticky');
    }else{
      header.removeClass('sticky');
    }
  });
  //main scrolling
  var mainBg = $('#main_bg');
  var scrollBtn = mainBg.find('.scroll');
  var siwperHeight = $('.swiper-container').offset();
  var headerHeight = $('#header').height();
  console.log(headerHeight);
  console.log(siwperHeight);
  
  scrollBtn.click(function(){
    $('html, body').animate({scrollTop:siwperHeight.top-headerHeight},1600);
  })
  //탑버튼
  $(window).scroll(function() {
    if ($(this).scrollTop()>1500) {
      $('#move_top_btn').fadeIn();
    } else {
      $('#move_top_btn').fadeOut();
    }
  });

  $('#move_top_btn ul li:first-child').click(function() {
    $('html, body').animate({scrollTop:siwperHeight.top-headerHeight}, 1500);
    return false;
  });
    
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

  //메인 모달
  $('.place_list').find('button').click(function(){
    $(this).next('.modal-wrap').css({display:'block'});
  });
  $('.modal-wrap').find('.close').click(function(){
    $('.modal-wrap').css({display:'none'});
  });
  //모달스크롤 플러그인
  $('.modal').mCustomScrollbar({
    theme:"minimal-dark",
    mouseWheelPixels : 900,
    scrollInertia : 400
  });
     
  //탭메뉴 on off
  $('.item-tabs li').click(function(){
    var tabId=$(this).attr('data-tab');

    $('.item-tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tabId).addClass('current');
    });
  $('.tab-link').click(function(){
    $(this).removeClass('active');
    $(this).addClass('active');
    });

  // Tab Menu
  var itemTabs = $( '.item-tabs' );
  var item = itemTabs.find('li');
      item.click( function () {
      item.removeClass( 'active' );
      $( this ).addClass( 'active' );
    });
  
  //탭메뉴페이드
  var themaIcon=$('.item-tabs li').offset().top-900;
  var aniTime=300;
  console.log(themaIcon);
  $(window).scroll(function(){
    if($(this).scrollTop()>themaIcon) {
      $('.item1').animate({
        opacity: '1'
      }, aniTime, function(){
        $('.item2').animate({
          opacity:'1'
        }, aniTime, function(){
          $('.item3').animate({
            opacity: '1'
          }, aniTime, function(){
            $('.item4').animate({
              opacity:'1'
            }, aniTime);
          });
        });
      });
    }
  });
  
  
  //탭컨텐츠 페이드
  var themaCon=$('.tab-content.current').offset().top-900;
  console.log(themaCon);

  $(window).scroll(function(){
    if($(this).scrollTop()>themaCon) {
      $('.ti1, .thema-overlay').delay(100).animate({
        opacity: '1'
      }, aniTime, function() {
        $('.ti2, .thema-overlay').delay(100).animate({
          opacity: '1'
        }, aniTime, function() {
          $('.ti3, .thema-overlay').delay(100).animate({
            opacity: '1'
          }, aniTime, function() {
            $('.ti4, .thema-overlay').delay(100).animate({
              opacity: '1'
            }, aniTime, function() {
              $('.ti5, .thema-overlay').delay(100).animate({
                opacity: '1'
              }, aniTime, function() {
                $('.ti6, .thema-overlay').delay(100).animate({
                  opacity: '1'
                }, aniTime);
              });
            });
          });
        });
      });
    }
  });
  
  //스페셜 타이틀
  var specialTitle=$('.special-wrap>h4');
  var specialTitleTop=specialTitle.offset().top-900;
  console.log(specialTitleTop);

  $(window).scroll(function() {
    if($(this).scrollTop()>specialTitleTop) {
      specialTitle.animate({
        'opacity' : '1',
        'left' : '50%'
      }, 800);
    }
  });

  var specialCon=$('.special-wrap');
  var specialConOne=$('.special-wrap>.special1');
  var specialConTwo=$('.special-wrap>.special2');
  var specialConTop=specialCon.offset().top-600;
  console.log(specialConTop);
  $(window).scroll(function() {
    if($(this).scrollTop()>specialConTop) {
      specialConOne.delay(100).animate({
        'left' : '0',
        'opacity' : '1'
      }, 800, function() {
        specialConTwo.delay(10).animate({
          'right' : '0',
          'opacity' : '1'
        }, 800)
      })
    }
  });

});
