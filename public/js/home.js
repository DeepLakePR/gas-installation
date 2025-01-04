$(document).ready(function () {
    
    /////////////////
    // Scroll Buttons
    const ScrollButtons = $('[scroll-target]');

    ScrollButtons.each((_, button)=>{

        $(button).on('click', ()=>{

            scroll({'top': $(`.${$(button).attr('scroll-target')}`).position().top - 150, 'behavior': 'smooth'});

        });

    });

});
