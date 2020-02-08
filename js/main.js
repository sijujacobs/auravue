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
        $nextIndex      = 1;			
        $currentIndex   = 0;		
        $interval       = 3500;	
        $fadeTime       = 8500;	
        $imgNum         = $('.imageSlider img').length;

        nextFadeIn();

        function nextFadeIn(){
            $('.imageSlider img').eq($currentIndex).fadeOut($fadeTime).delay($interval)
            .end().eq($nextIndex).hide().fadeIn($fadeTime, nextFadeIn).delay($interval);
            if($nextIndex < $imgNum-1){ $nextIndex++; } else { $nextIndex = 0;}
            if($currentIndex < $imgNum-1){ $currentIndex++; } else { $currentIndex =0; }
        };
    });

    
    
})();