(function() {

    $('.menuButton').click(function() {
        console.log(' MenuButtonClicked :: : ');
        $(this).toggleClass('open');
        $('.navOverlay').toggleClass('open');
    });

    $('.navOverlay li').click(function() {
        $('.menuButton, .navOverlay').removeClass('open');
        // $('.navOverlay').removeClass('open');
    });

    function setPosition() {
        $('#mainContainer').css({ "margin-top": "100vh" });
    }
    setPosition();
    $(window).resize(setPosition);

    function homeEffect() {
        var pPosition = window.pageYOffset || document.documentElement.scrollTop;
        var homeSection = $('#home');
        if ($(window).width() > 481) {
            homeSection.css({ 'transform': 'scale(' + (100 - pPosition / 100) / 98 + ')', 'opacity': (1 - (pPosition / 20) / 30) });
        } else {
            homeSection.css({ 'transform': 'scale(' + (100 - pPosition / 100) / 99 + ')', 'opacity': (1 - (pPosition / 20) / 15) });
        }
    }
    homeEffect();
    $(window).scroll(homeEffect);


    
    $(document).ready(function(){
        smoothSlider();
        
        function smoothSlider(){
            var slides = $('#slideshow img');
            slides[0].className = 'show';
            slideShow(0);

            function slideShow(sIndex) {
                slides[sIndex].className = '';
                if (sIndex === slides.length - 1) {
                    slides[0].className = 'show';
                    sIndex = -1;
                }else if (sIndex > -1) {
                    slides[sIndex + 1].className = 'show';
                }
                setTimeout(function() {
                    slideShow(++sIndex % slides.length)
                }, 10000); // setTimer duration should be same to CSS opacity duration
            }
        }
    });

    
    
})();