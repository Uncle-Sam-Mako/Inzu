/*Pour tous les buttons présents dans un form qui ne sont pas du type : submit, supprimer l'évenement lié au click*/
document.querySelectorAll("form button").forEach(e => {
    e.addEventListener('click', function (event) {
        event.preventDefault();
    });
});

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

//Loader-house-image

let fileInput = document.querySelectorAll('.file-input');
fileInput.forEach(curInput => {
    curInput.addEventListener('change', function(){
        const parentOf = document.querySelector('li[data-preview="#' + curInput.getAttribute('id') + '"]');
        const imageBox = parentOf.querySelector('img');
        const cancelBtn = parentOf.querySelector('.cancel-btn');
        const file = curInput.files[0];
        if(file){
            parentOf.classList.remove("hasError");
            parentOf.querySelector('.file-error').classList.remove("type");
            parentOf.querySelector('.file-error').classList.remove("size");
            if(!validFile(file)){
                parentOf.classList.add("filled");
                const reader = new FileReader();
                reader.onload = function(){
                    const result = reader.result;
                    imageBox.src = result;
                }
                reader.readAsDataURL(file);
            }else{
                curInput.value = "";
                parentOf.classList.remove("filled");
                imageBox.src = "";
                if(validFile(file)==1){
                    parentOf.querySelector('.file-error').classList.add("type");
                }else{
                    parentOf.querySelector('.file-error').classList.add("size");
                }
            }
            console.log(validFile(file));
        }
        cancelBtn.addEventListener("click", function(){
            parentOf.classList.remove("filled");
            imageBox.src = "";
            
        })
    })
})

function validFile(file){
    let validTypeFile = [
        'image/jpeg',
        'image/png',
        'image/pjpeg'
    ]
    for(let i = 0, c = validTypeFile.length; i<c; i++){
        if(file.type === validTypeFile[i]){
            return (file.size > 2097152) ? 2 : 0;
        }
    }
    return 1;
}