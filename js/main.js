
// Formulaire semi-fixe dans house.html
const semiFixed = $(function() {
    var top = $('#side-box').offset().top - parseFloat($('#side-box').css('marginTop').replace(/auto/, 0));
    var footTop = $('#near-houses').offset().top - parseFloat($('#near-houses').css('marginTop').replace(/auto/, 0));
    var maxY = footTop - $('#side-box').outerHeight();
    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
            if (y < maxY) {
                $('#side-box').addClass('fixed').removeAttr('style');
            } else {
                $('#side-box').removeClass('fixed').css({
                position: 'absolute',
                top: (maxY - top) + 'px'
                });
            }
        } else {
            $('#side-box').removeClass('fixed');
        }
    });
});