$(function(){
  //비디오
  gsap.to('#videoPlay', {
    scrollTrigger: {
      trigger: "#cinetalk_container",
      start: "top top",
      scrub: 1,
      pin: "#cinetalk_container",
    },
    width: "100%",
  });
  //비주얼텍스트
  gsap.to('.vt1', {
    scrollTrigger: {
      trigger: "#cinetalk_container",
      start: "top top",
      scrub: 15,
      pin: "#cinetalk_container",
    },
    left: "-1500px",
    opacity: 0,
    color: "#000"
  });
  gsap.to('.vt2', {
    scrollTrigger: {
      trigger: "#cinetalk_container",
      start: "top top",
      scrub: 15,
      pin: "#cinetalk_container",
    },
    right: "-1500px",
    opacity: 0,
    color: "#000"
  });


  //시네마토크 텍스트
  gsap.to('.cineTalk_con', {
    scrollTrigger: {
      trigger: "#wrap",
      start: "top top",
      scrub: 1,
    },
    top: "-150px",
    opacity: 1
  });


  //영상 스크롤시 재생
  $(window).scroll(function(){
    var vidHeight = 0;
    var vid = document.getElementById("mommy");

    vidHeight=$(window).scrollTop();
    console.log(vidHeight);

    if(vidHeight <= 0) {
      vid.pause();
    } else if (vidHeight > 255) {
      vid.play();
    }
  });

  //텍스트 박스 페이드
  var proBox = $('.cineTalk_con').offset().top-600;
  var aniTime = 500; 
  console.log(proBox);
  
  $(window).scroll(function(){
    if($(this).scrollTop()>proBox) {
      $('.sub_tit').delay(200).animate({
        opacity: '1'
      }, aniTime, function() {
        $('.prg_img').delay(200).animate({
          opacity: '1'
        }, aniTime, function() {
          $('.prg1').delay(200).animate({
            opacity: '1'
          }, aniTime, function() {
            $('.prg2').delay(200).animate({
              opacity: '1'
            }, aniTime, function() {
              $('.prg_img_two').delay(200).animate({
                opacity: '1'
              }, aniTime)
                });
              });
            });
          });
        }
  });

});