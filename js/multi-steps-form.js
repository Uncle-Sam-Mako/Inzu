let currentStep = 0,
form = document.querySelector('.multi-steps'),
prevBtn = document.getElementById("prevStepBtn"),nextBtn = document.getElementById("nextStepBtn"),
steps = document.querySelectorAll('.multi-steps .step'),
indicatorsContainer = document.getElementById('indicators'),
currentIndicator = null;

showStep(currentStep);
createIndicators();

function showStep(n){
    steps[n].classList.add('active');
    /*Le bouton retour est désactivé lorsque on est à la prémière étape */
    if(currentStep > 0){
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
    if(currentStep == steps.length) {
        form.submit();
        return false;
    }
}
function nextPrev(n){
    steps[currentStep].classList.remove('active');
    currentStep = currentStep + n;
    changeIndicator(currentStep);
    showStep(currentStep);
    return false;
}
function createIndicators(){
    let elt = null;
    for(let i = 0, c = steps.length; i<c; i++){
        elt = document.createElement('span');
        elt.className = "indicator";
        elt.innerHTML = i+1;
        indicatorsContainer.appendChild(elt);
        if(i==currentStep) elt.classList.add('active');
    }
}
function changeIndicator(n){
    let indicators = document.querySelectorAll('.indicator');
    currentIndicator = document.querySelector('.indicator.active');
    currentIndicator.classList.remove('active');
    currentIndicator = indicators[n];
    currentIndicator.classList.add('active');
}
let indicators = indicatorsContainer.querySelectorAll('.indicator');
indicators.forEach(a => {
    a.addEventListener('click', function(){
        let index = Array.from(indicators).findIndex(f => f === a);
        steps[currentStep].classList.remove('active');
        currentStep = index;
        changeIndicator(currentStep);
        showStep(currentStep);
        return false;
    })
})