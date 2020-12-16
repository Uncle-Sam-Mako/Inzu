
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

//Shoz and mask password
const showPass = function(){
    let input = $('#password');
    input.attr("type", "text");
};

//Change login option : Email or Phone
const loginOptions = $(function() {
    let $radios = $('.connection-options-2 input[name="option"]');
    $radios.change(function() {
        let $checked = $radios.filter(function() {
            return $(this).prop('checked');
        });
        $checked.val()=="phone" ?  $("#loginPhoneEmail").addClass("mode-phone") : $("#loginPhoneEmail").removeClass("mode-phone");
    });
});

//Open popups
let openedPopup = null;
let opener = null;
let openPopup = function(e){
    e.preventDefault();
    if(openedPopup !== null) openedPopup.setAttribute('data-hidden', true);
    opener = e.target;
    openedPopup = document.querySelector(opener.getAttribute('data-popup'));
    openedPopup.setAttribute('data-hidden', false);
    
}
let closePopup = function(e){
    if(openedPopup===null) return;
    //e.preventDefault();
    openedPopup.setAttribute("data-hidden", true);
    //opener.RemoveEventListener("click", openPopup);
    $(window).click(function(){
        if(openedPopup!==null && opener!==null) closePopup();
    })
    openedPopup = null;
    opener = null;
}
let popupOpeners = Array.from(document.querySelectorAll(".openPopup"));
    popupOpeners.forEach(opener => {
    opener.addEventListener("click", openPopup);
});
$(window).click(function(){
    if(openedPopup!==null && opener!==null) closePopup();
})
$(opener).click(function(e){
    e.stopPropagation();
})
