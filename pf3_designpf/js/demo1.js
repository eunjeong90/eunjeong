/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2018, Codrops
 * http://www.codrops.com
 */
window.onload = function(){

    document.documentElement.className="js";
    var supportsCssVars=function(){
        var e,t=document.createElement("style");
        return t.innerHTML="root: { --tmp-var: bold; }",
        document.head.appendChild(t),
        e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),
        t.parentNode.removeChild(t),e};


    const chars = ['$','%','#','@','&','(',')','=','*','/'];
    const charsTotal = chars.length;
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    class Entry {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.image = this.DOM.el.querySelector('.content__img');
            this.DOM.title = {word: this.DOM.el.querySelector('.section_text')};
            charming(this.DOM.title.word);
            this.DOM.title.letters = Array.from(this.DOM.title.word.querySelectorAll('span'));
            this.DOM.title.letters.forEach(letter => letter.dataset.initial = letter.innerHTML);
            this.lettersTotal = this.DOM.title.letters.length;
            observer.observe(this.DOM.el);
        }  
        enter(direction = 'down') {
            this.DOM.title.word.style.opacity = 1;
            
            this.timeouts = [];
            this.complete = false;
            let cnt = 0;
            this.DOM.title.letters.forEach((letter, pos) => {
                const timeout = setTimeout(() => {
                    letter.innerHTML = chars[getRandomInt(0,charsTotal-1)];
                    setTimeout(() => {
                        letter.innerHTML = letter.dataset.initial;
                        ++cnt;
                        if ( cnt === this.lettersTotal ) {
                            this.complete = true;
                        }
                    }, 100);
                }, pos*80);
                this.timeouts.push(timeout);
            });
        }
        exit(direction = 'down') {
            this.DOM.title.word.style.opacity = 0;
            if ( this.complete ) return;
            for ( let i = 0, len = this.timeouts.length; i <= len - 1; ++i ) {
                clearTimeout(this.timeouts[i]);
            }
        }  
    }

    let observer;
    let current = -1;
    let allentries = [];
    const sections = Array.from(document.querySelectorAll('.con_box'));
    // Preload all the images in the page..
	imagesLoaded(document.querySelectorAll('.content__img'), () => {
        document.body.classList.remove('loading');
        if ('IntersectionObserver' in window) {
            document.body.classList.add('ioapi');

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if ( entry.intersectionRatio > 0.5 ) {
                        const newcurrent = sections.indexOf(entry.target);
                        if ( newcurrent === current ) return;
                        const direction = newcurrent > current;
                        if (current >= 0 ) {
                            allentries[current].exit(direction ? 'down' : 'up');
                        }
                        allentries[newcurrent].enter(direction ? 'down' : 'up');
                        current = newcurrent;
                    }
                });
            }, { threshold: 0.5 });
            
            sections.forEach(section => allentries.push(new Entry(section)));
        }
    });



    let didScroll = false;
			let aniTitles = document.querySelectorAll('.ani_title');

			const scrollInProgress = () => {
				didScroll = true
			}

			const raf = () => {
				if(didScroll) {
					aniTitles.forEach((element, index) => {
						element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
					})
					didScroll = false;
				}
				requestAnimationFrame(raf);
			}


			requestAnimationFrame(raf);
			window.addEventListener('scroll', scrollInProgress)

            
            $(function() {

                $('.email').find('.btn').click(function() {
                    $('#email_form').animate({
                        width: "toggle",
                        height: "toggle"},
                        100, "linear");
                });
                $('.kakao').find('.btn').click(function() {
                    $('.kakaoChannel').animate({
                        width: "toggle",
                        height: "toggle"},
                        200, "linear");
                });
    
    
                $(document).ready(function() {
                    emailjs.init("user_vAzymLlxefV1aLgNDhv0m");		
            //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
            $('input[name=submit]').click(function(){       	 
              
              var templateParams = {	
              //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
                    name: $('input[name=name]').val(),
                    email : $('input[name=email]').val(),
                    message : $('textarea[name=message]').val()
                               };
                        
                        
             emailjs.send('myGmail', 'template_m66zteq', templateParams)
             //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
                     .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                                     alert('전송되었습니다. 곧 연락드리겠습니다!')
                     }, function(error) {
                        console.log('error...', error);
                                        alert('이메일 전송이 실패했어요 카카오톡으로 연결은 어떠신가요?')
                     });
            })
                });
    
    
                    //카카오톡
                    var chatChannel = $('.kakaoChannel');
    
                    Kakao.init('43ba3854a156f6b4990a47159b610c86');
                    chatChannel.click(function() {
                        Kakao.Channel.chat({
                      channelPublicId: '_Txkcxis',
                });
                });
    
    
    
        });
}