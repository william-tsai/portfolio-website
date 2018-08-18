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
});
// Hotjar Tracking Code for https://www.williamtsai.me/
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:984372,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');