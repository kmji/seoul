$(function(){
    /* HEADER */
    $('#langBtn').click(function(){
        url=$('#langList').val();
        window.open(url);
    })
    /* SC-VISUAL */
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
        $(this).toggleClass('active'); 
    })
    $('.group-nav button').click(function(){
        if($(this).hasClass('news')){
            mainSlide.slideToLoop(0,1000,false);
        }
        else {
            mainSlide.slideToLoop(6,1000,false)
        }

        $(this).addClass('active').siblings().removeClass('active');

    });
    /* SC-BANNER */
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
        $(this).toggleClass('active');
    })
    /* SC-RELATIVE */
    $('.sc-relative .relative-item > a').click(function(e){
        
        if(!$(this).parent().hasClass('no')){

            e.preventDefault();
            if($(this).parent().hasClass('active')){
                $('.sc-relative .relative-item').removeClass('active');
                $('.sc-relative .sub-nav').stop().slideUp();
            }else{
                $('.sc-relative .relative-item').removeClass('active');
                $(this).parent().addClass('active')
    
                $('.sc-relative .sub-nav').stop().slideUp();
                $(this).siblings('.sub-nav').stop().slideDown();
            }
        }
    })
    $(document).click(function(e){
        if(!$('.sc-relative').has(e.target).length){
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
    })
    /* BTN-TOP*/
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
