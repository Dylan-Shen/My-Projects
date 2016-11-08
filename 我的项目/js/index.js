   $(function() {

       $('#content').fullpage({
           verticalCentered: false,
           anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
           navigation: true,
           navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件'],
           scrollingSpeed:1000,
           menu: '#menu',
           afterRender: function(){

                    $('.bg1-3').animate({bottom:"0px"},700);
                    $('.bg1-2').animate({bottom:"100px"},1000);
                    $('.bg1-1').animate({bottom:"0px"},1000);
                    $('.mail').animate({top:"25px" },1000);
                    // $('.section1 .hgroup').fadeIn(1500)
                    $('.section1 .hgroup').addClass('active1')
               
           },
           afterLoad: function(anchorLink, index) {
           	   if(index==1){
                    $('.bg1-3').animate({bottom:"0px"},700);
                    $('.bg1-2').animate({bottom:"100px"},1000);
                    $('.bg1-1').animate({bottom:"0px"},1000);
                    $('.mail').animate({top:"25px" },1000);
                    $('.section1 .hgroup').addClass('active1')
           	   };
               if (index == 2) {
                   // 第二屏
                   $('.section2 h3,strong').addClass('active1');
                   $('.bg2-3').animate({
                       bottom: "100px"
                   }, 800);
                   $('.bg2-1').animate({
                       left: "75px"
                   }, 900);
                   $('.bg2-2').animate({
                       right: '145px'
                   }, 900)
                  $('.section2 .p1').fadeIn(2000)
               };
               if(index==3){
                $('.section3 .p1').animate({left:'178px'},1000);
                $('.bg3-3').animate({right:'360px'},1000);
                $('.bg3-2,.bg3-1').fadeIn(2000);
                $('.section3 h3,strong').addClass('active1');
               };
              if(index==4){
                $('.section4 .p1').fadeIn(2500);
                $('.section4 h3,strong').addClass('active1');
                $('.bg4-1').animate({bottom:'93px'},1000)
                $('.bg4-2').animate({bottom:'96px'},1200)
                $('.bg4-3').animate({bottom:'167px'},1100)
              };
              if(index==5){
               $('.section5 h3,strong').addClass('active1'); 
               $('.bg5-1').animate({left:'175px'},1000)
               $('.bg5-2').animate({left:'444px'},900)
               $('.bg5-3').animate({right:'444px'},900)
               $('.bg5-4').animate({right:'175px'},1000)
              };
              if(index==6){
                $('.a-img').animate({bottom:'200px'},1000);
                $('.section6 h3,h4,strong').addClass('active1'); 
              }
           },
           onLeave: function(index, direction){
              if(index==1){
                    $('.bg1-3').animate({bottom:"-377px"},1000);
                    $('.bg1-2').animate({bottom:"-392px"},200);
                    $('.bg1-1').animate({bottom:"-850px"},200);
                    $('.mail').animate({top:"-26px" },200);
                    $('.section1 .hgroup').removeClass('active1')
                    
               };
           	  if(index==2){
           	  	 $('.bg2-3').animate({
                       bottom: "-299px"
                   }, 200);
           	  	 $('.bg2-1').animate({
                       left: "-233px"
                   }, 200);
                   $('.bg2-2').animate({
                       right: '-211px'
                   }, 200);
                   $('.section2 h3,strong').removeClass('active1');
                   $('.section2 .p1').fadeOut(100)
                   
           	  };
              if(index==3){
                $('.section3 .p1').animate({
                  left:'-512px'
                },200);
                $('.section3 h3,strong').removeClass('active1');
                $('.bg3-3').animate({right:'-441px'},200);
                $('.bg3-2,.bg3-1').fadeOut(200);
              }
              if(index==4){
                $('.section4 .p1').fadeOut(100);
                $('.section4 h3,strong').removeClass('active1');
                $('.bg4-1').animate({bottom:'-372px'},200);
                $('.bg4-2').animate({bottom:'-449px'},200);
                $('.bg4-3').animate({bottom:'-248px'},200);
              }
              if(index==5){
               $('.section5 h3,strong').removeClass('active1'); 
               $('.bg5-1').animate({left:'-383px'},200)
               $('.bg5-2').animate({left:'-652px'},200)
               $('.bg5-3').animate({right:'-652px'},200)
               $('.bg5-4').animate({right:'-383px'},200)
              }
              if(index==6){
                $('.a-img').animate({bottom:'-70px'},200);
                $('.section6 h3,h4,strong').removeClass('active1');
              }
             
           },
       });



   });
