const soundFiles = {
    actionA: "./sounds/boom.wav",
    actionS: "./sounds/clap.wav",
    actionD: "./sounds/hihat.wav",
    actionF: "./sounds/kick.wav",
    actionG: "./sounds/openhat.wav",
    actionH: "./sounds/ride.wav",
    actionJ: "./sounds/snare.wav",
    actionK: "./sounds/tink.wav",
    actionL: "./sounds/tom.wav"
};

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => playSound(button.classList));
});

document.addEventListener('keydown', function(event){
    const keyword = event.key.toUpperCase();
    playSound([`action${keyword}`]);
});

function playSound(classList) {
    const soundClass = Array.from(classList).find(className => soundFiles[className]);
    
    if (soundClass) {
        const audio = new Audio(soundFiles[soundClass]);
        audio.play();
    }
}