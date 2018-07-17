$(document).ready(function(){
    $(".header, .container").height($(window).height());
    $(".navbar a").click(function(){
        $("body, html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        }, 1000)
    });
    AOS.init();
    $('#scroll-btn').on('click', function(event){ 
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
    $('#profile-pic-link').on('click', function(){
        $('.body-tag, .div-tag, .h1-tag, .e-h1-tag, .img-tag, .e-div-tag, .e-body-tag, .e-html-tag').fadeOut(function(){
            $('.headline-row').css('margin-top', '24px');
            $('#profile-pic').css({'display': 'inline'});
            $('#profile-pic').animate({left: '18vw'});
            $('.headline-col').animate({left: '12vw'});
            $('.headline-col').css('max-width', '50vw');
        });
    })
})