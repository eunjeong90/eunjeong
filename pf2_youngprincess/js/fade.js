$(function() {


  //서브 영화공간주안
  var juanHistory = $('.juan_history').offset().top-600;
  var aniTime = 500; 
  console.log(juanHistory);
  
  $(window).scroll(function(){
    if($(this).scrollTop()>juanHistory) {
      $('.juan_history_text h3').delay(100).animate({
        opacity: '1',
        top: '-20px'
      }, aniTime, function() {
        $('.juan_history_text p').delay(300).animate({
          opacity: '1',
          top: '-20px'
        }, aniTime, function() {
          $('.juan_history_img_box').delay(100).animate({
            opacity: '1',
            top: '-20px'
          }, aniTime, function() {
            $('.footprints h3:first-child').delay(100).animate({
              opacity: '1',
              top: '-20px'
            }, aniTime, function() {
              $('.footprints .circle1').animate({
                opacity: '1',
                top: '-20px'
              }, aniTime, function() {
                $('.footprints .circle2').animate({
                  opacity: '1',
                  top: '-20px'
                }, aniTime, function() {
                  $('.footprints .circle3').animate({
                    opacity: '1',
                    top: '-20px'
                  }, aniTime, function() {
                    $('.footprints .circle4').animate({
                      opacity: '1',
                      top: '-20px'
                  }, aniTime, function() {
                    $('.footprints h3:last-child').delay(100).animate({
                      opacity: '1',
                      top: '-20px'
                    }, aniTime, function() {
                      $('.rental').delay(300).animate({
                        opacity: '1',
                        top: '-20px'
                    }, aniTime)
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
   }
  });


});