const button = document.querySelectorAll('.calc-form input');

const buttonArray = Array.from(button);

buttonArray.forEach((element, index) => {
  element.addEventListener('click', e => {
    beepsound();
  });
});

let audioContext = new window.AudioContext();
function beepsound() {
  try {
    let oscillator = audioContext.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 3000;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(function () {
      oscillator.stop();
    }, 50);
  } catch (error) {
    alert(error);
  }
}
