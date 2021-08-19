$(function() {

  //버거네비
  $('.burger_btn').click(function() {
    $(this).toggleClass('active');
    $('#side_panel').toggleClass('on');
    $('.slide_panel_wrap').toggleClass('on');
    $('#logo').toggleClass('on');
    $('.logoImg').attr('src', function(index, attr){
      if(attr.match('_front')) {
        return attr.replace('_front.png', "_back.png");
      }else{
        return attr.replace('_back.png', '_front.png');
      }
    })
  });


  //네비게이션 show and hide
  var lastScrollTop = 0;
  var delta = 5;
  var fixBox = document.querySelector('#header');
  var fixBoxHeight = fixBox.offsetHeight;
  var didScroll;

  window.onscroll = function(e) {
      didScroll = true;
  };
  
  setInterval(function(){
      if(didScroll){
          hasScrolled();
          didScroll = false;
      }
  }, 250);
  
  function hasScrolled(){
      var nowScrollTop = window.scrollY;
      if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
          return;
      }
      if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
          //Scroll down
          fixBox.classList.add('nav_up');
      }else{
          if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
              //Scroll up
              fixBox.classList.remove('nav_up');
          }
      }
      lastScrollTop = nowScrollTop;
  }


  //시네마토크 이미지
/*   $('.cineImg').hover(function() {
     $(this).attr('src', function(index, attr){
       if(attr.match('.gif')) {
         return attr.replace('mommy.gif', 'mommy.jpg');
        }else{
         return attr.replace('mommy.jpg', 'mommy.gif');
        }
     });
  }); */

  //아이템 페이드
  var animation = function () {
    var items, winH;
   
    var initModule = function () {
      items = document.querySelectorAll(".animate");
      winH = window.innerHeight;
      _addEventHandlers();
    }
   
    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition);
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };
   
    var _checkPosition = function () {
      for (var i = 0; i < items.length; i++) {
        var posFromTop = items[i].getBoundingClientRect().top+400;
        if (winH > posFromTop) {
          items[i].classList.add("active");
        }
      }
    }
   
    return {
      init: initModule
    }
  }
   
  animation().init();


});