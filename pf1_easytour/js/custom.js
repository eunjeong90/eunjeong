$(function() {



    //로그인폼
    $('.util li').first().click(function() {
      $('#login-wrap').css({display:'block'});
    });
    $('.regiBtn').click(function() {
      $('#regi-wrap').css({display: 'block'});
    });
    //회원가입폼
    $('.util li').last().click(function() {
      $('#regi-wrap').css({display:'block'});
    });
    //모달닫기
    $('.modal-wrap').find('.close').click(function(){
      $('.modal-wrap').css({display:'none'});
    });
    

  });




window.onload= function(){

//아무 곳이나 클릭하면 모달 레이어 숨기기
var modal=document.getElementsByClassName('modal-wrap');
console.log(modal);

window.onclick=function(e) {

  if(e.target==modal[0]){
    modal[0].style.display='none';
  } else if(e.target==modal[1]) {
    modal[1].style.display='none';
  } else if(e.target==modal[2]) {
    modal[2].style.display='none';
  } else if(e.target==modal[3]) {
    modal[3].style.display='none';
  } else if(e.target==modal[4]) {
    modal[4].style.display='none';
  } 
}


  //nav
  var header = document.querySelector('#header');
  var mainMenu = document.querySelectorAll('.gnb>li');
  var subMenu = document.querySelectorAll('.submenu_list');
  var headerHeight = header.offsetHeight;
  var headerWidth = header.offsetWidth; 
  var mainMenuHeight = mainMenu.offsetHeight;
  var subMenuHeight= 0;
  
  var bodyWidth=document.body.offsetWidth;
      
      for(var i=0; i < subMenu.length; i++) {
        if(subMenu[i].offsetHeight>subMenuHeight){
          subMenuHeight=subMenu[i].offsetHeight;
        }
      }
      console.log(headerHeight);
      console.log(subMenuHeight);
      console.log(headerWidth);
      console.log(bodyWidth);

      for(var i=0; i < mainMenu.length; i++) {
      if (bodyWidth>780){
           mainMenu[i].addEventListener('mouseover', function() {
             header.style.height=headerHeight+subMenuHeight+'px';
           });
           mainMenu[i].addEventListener('mouseout', function() {
             header.style.height=headerHeight + 'px';
           });
         } else if (bodyWidth<=780){
          header.addEventListener('mouseover', function() {
            header.style.height=headerHeight+headerHeight+subMenuHeight+'px';
          });
          header.addEventListener('mouseout', function() {
            header.style.height=headerHeight + 'px';
          });
         }
      }

      
    };