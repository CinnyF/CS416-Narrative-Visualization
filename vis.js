function slider() {
        
        function animate_slider(){
            $('.slider #'+shown).animate({
                opacity:0 // fade out
            },1000);
            $('.slider #'+next_slide).animate({
                opacity:1.0 // fade in
            },1000);
            //console.log(shown, next_slide);
            shown = next_slide;
        }
    
        function choose_next() {
            next_slide = (shown == sc)? 1:shown+1;
            animate_slider();
        }
    
        $('.slider #1').css({opacity:1}); //show 1st image
        var shown = 1;
        var next_slide;
        var sc = $('.slider h1').length; // total images
        var iv = setInterval(choose_next,3500);
        $('.slider_nav').hover(function(){
            clearInterval(iv); // stop animation
        }, function() {
            iv = setInterval(choose_next,3500); // resume animation
        });
        $('.slider_nav span').click(function(e){
            var n = e.target.getAttribute('name');
            //console.log(e.target.outerHTML, n);
            if (n=='prev') {
                next_slide = (shown == 1)? sc:shown-1;
            } else if(n=='next') {
                next_slide = (shown == sc)? 1:shown+1;
            } else {
                return;
            }
            animate_slider();
        });
    }
    
    window.onload = slider;
