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

let fileInput = document.getElementById('house-img'),
imgContainer = document.querySelector('.loader-input-list');
fileInput.addEventListener('change', function(){
    let file = fileInput.files;
    for(let i = 0, c = file.length; i<c; i++){
        if(file[i]){
            document.querySelector('#file-error').classList.remove("type");
            document.querySelector('#file-error').classList.remove("size");
            document.querySelector('#file-error').classList.remove("error");
            if(!validFile(file[i])){
                const reader = new FileReader();
                reader.onload = function(){
                    const result = reader.result;
                    imgContainer.appendChild(createPreview(result));
                }
                reader.readAsDataURL(file[i]);
            }else{
                if(validFile(file[i])==1){
                    document.querySelector('#file-error').classList.add("type");
                }else{
                    document.querySelector('#file-error').classList.add("size");
                }
                document.querySelector('#file-error').classList.add("error");
            }
        }
    }
    console.log(files);
});
document.querySelectorAll('.preview-img').forEach(li => {
    li.addEventListener('click', function(){
        alert('hello');
    });
});

function createPreview(url){
    let preview = document.querySelector('.preview-img').cloneNode(true);
    preview.querySelector('img').src = url;
    preview.removeAttribute('hidden')
    return preview;
}
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