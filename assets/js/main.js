$(function(){

    /**
     * 
     * 
     * 
     */
    $('#langBtn').click(function(){
        url=$('#langList').val(); //선택한 값을 변수 url에 담기
        window.open(url); //새창열기 - window.open()
    })



    const mainSlide = new Swiper('.main-slide',{
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation:{
            nextEl:'.btn-next',
            prevEl:'.btn-prev',
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        },
        on:{
            slideChangeTransitionEnd:function(){
                $('.group-nav button').removeClass('active');
                if(this.realIndex>=6){
                    $('.group-nav .citizen').addClass('active');
                }
                else{
                    $('.group-nav .news').addClass('active');
                }
            }
        }
    });


    $('.sc-visual .group-slide .slide-control .btn-autoplay').click(function(){
        if($(this).hasClass('active')){
            mainSlide.autoplay.start();
        }else{
            mainSlide.autoplay.stop();
        }
        $(this).toggleClass('active'); //토글클래스는 앞에 조건을주고 뒤에다가 적어야함
    })
  


    $('.group-nav button').click(function(){
        if($(this).hasClass('news')){
            mainSlide.slideToLoop(0,1000,false); //loop가 되었을땐 slideTo 안되고 slideToLoop를 사용해야함
        }
        else {
            mainSlide.slideToLoop(6,1000,false)
        }

        $(this).addClass('active').siblings().removeClass('active');

    });



    const bottomSlide = new Swiper('.banner-slide',{
        slidesPerView: 3,
        spaceBetween: 45,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation:{
            nextEl:'.btn-next',
            prevEl:'.btn-prev',
        },
        pagination:{
            el:'.fraction',
            type:'fraction'
        }
    });

    $('.sc-banner .banner-slide .slide-control .btn-autoplay').click(function(){
        if($(this).hasClass('active')){
            bottomSlide.autoplay.start();
        }else{
            bottomSlide.autoplay.stop();
        }
        $(this).toggleClass('active'); //토글클래스는 앞에 조건을주고 뒤에다가 적어야함
    })





    $('.sc-relative .relative-item > a').click(function(e){
        
        if(!$(this).parent().hasClass('no')){

            e.preventDefault();
            if($(this).parent().hasClass('active')){
                $('.sc-relative .relative-item').removeClass('active');
                $('.sc-relative .sub-nav').stop().slideUp();
            }else{
                $('.sc-relative .relative-item').removeClass('active');
                $(this).parent().addClass('active')
    
                $('.sc-relative .sub-nav').stop().slideUp(); //up-닫힘
                $(this).siblings('.sub-nav').stop().slideDown(); //down-열림
            }
        }
    })

    /**
     * 해당영역제외클릭시 닫히게
     * 
     */
    $(document).click(function(e){ //내가 선택한 태그를 알아보기 위해서 e.target을 사용할수있단
        if(!$('.sc-relative').has(e.target).length){ //sc-relative 안에면 (e.target).length가 1이고 밖은 0이 된다
            $('.sc-relative .relative-item').removeClass('active');
            $('.sc-relative .sub-nav').stop().slideUp();
        }
    })

    $('.sc-relative .sub-nav .sub-item').keydown(function(e){
        code = e.keyCode;

        if((($(this).is(':first-child') && e.shiftKey) || ($(this).is(':last-child')  && !e.shiftKey)) && code === 9){
            $('.sc-relative .relative-item').removeClass('active');
            $('.sc-relative .sub-nav').stop().slideUp();
        }

        // if($(this).is(':first-child') && e.shiftKey || $(this).is(':last-child')  && !e.shiftKey){
        //     $('.sc-relative .relative-item').removeClass('active');
        //     $('.sc-relative .sub-nav').stop().slideUp();
        // }
        // else if($(this).is(':last-child') && code === 9 && !e.shiftKey){
        //     $('.sc-relative .relative-item').removeClass('active');
        //     $('.sc-relative .sub-nav').stop().slideUp();
        // }

    })








    $('.btn-top').click(function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    })


    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr >= 100){
            $('.btn-top').addClass('show');
        }
        else{
            $('.btn-top').removeClass('show');
        }
    })




});
