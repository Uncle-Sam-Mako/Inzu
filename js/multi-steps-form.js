let currentStep = 0;
let form = document.querySelector('.multi-steps');
let prevBtn = document.getElementById("prevStepBtn");
let nextBtn = document.getElementById("nextStepBtn");
let steps = document.querySelectorAll('.multi-steps .step');
showStep(currentStep);
function showStep(n){
    steps[n].classList.add('active');
    /*Le bouton retour est désactivé lorsque on est à la prémière étape */
    if(currentStep>0){
        prevBtn.removeAttribute('disabled');
    }else{
        prevBtn.setAttribute('disabled', true);    
    }
    /*Si on est à la dernière étape*/
    if(n == (steps.length - 1)){
        nextBtn.innerHTML = "Confirmer";
    }else{
        nextBtn.innerHTML = "Suivant";
    }
}
function nextPrev(n){
    steps[currentStep].classList.remove('active');
    currentStep = currentStep + n;
    if(currentStep == steps.length) {
        form.submit();
        return false;
    }
    showStep(currentStep);
    return false;
}
// prevBtn.addEventListener('click', nextPrev(-1));
// nextBtn.addEventListener('click', nextPrev(1));