
const audio = new Audio('music/inst.ogg');
window.addEventListener('load', () => {
  audio.play().catch(error => {
    console.error('Audio playback failed:', error);
  });
});
audio.play();
audio.loop = true;


const target = document.getElementById('maint');
const myDiv = document.getElementById('qac');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      myDiv.classList.remove('visible');
    } else {
      myDiv.classList.add('visible');
    }
  },
  { threshold: 0 }
);

observer.observe(target);