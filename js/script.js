$(window).load(function(){


    // Show image subtitle
    $('.b-image').hover(function(){
        $(this).find(".b-image__icon").slideDown();
    }, function(){
        $(this).find(".b-image__icon").slideUp();
    });

    // Fancybox
    $(".b-image__icon_fancy").fancybox();

    // Carousel
    $(".b-clients-carousel__control_right").click(function(){
        var carusel = $('.b-carousel-list');
        right_carusel(carusel);
        return false;
    });

    $(".b-clients-carousel__control_left").click(function(){
        var carusel = $('.b-carousel-list');
        left_carusel(carusel);
        return false;
    });

    function left_carusel(carusel){
        var block_width = $(carusel).find('.b-carousel-list__carousel-element').first().outerWidth(true);
        $(carusel).find(".b-carousel-list__carousel-element").first().clone().appendTo($(".b-carousel-list"));
        $(carusel).find(".b-carousel-list__carousel-element").first().remove();

    }

    function right_carusel(carusel){
        var block_width = $(carusel).find('.b-carousel-list__carousel-element').last().outerWidth(true);
        $(carusel).find(".b-carousel-list__carousel-element").last().clone().prependTo($(".b-carousel-list"));
        $(carusel).find(".b-carousel-list__carousel-element").last().remove();
    }

    //Slider
    var slider =  $('.b-slide-show__slides').bxSlider({
        pager : false,
        controls : false,
        startSlide:0
    });

    $('.b-controls__control_right').click(function(){
        slider.goToNextSlide();
        return false;
    });

    $('.b-controls__control_left').click(function(){
        slider.goToPrevSlide();
        return false;
    });
});