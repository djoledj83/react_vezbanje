function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let slovo = document.querySelector(`.slovo[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    slovo.classList.add('playing');
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

let slova = document.querySelectorAll('.slovo');
slova.forEach(slovo => slovo.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);