document.addEventListener('DOMContentLoaded', function() {

  const particles = document.querySelectorAll('.wandering-particle');
  

  particles.forEach(particle => {
   
    const randomX = (Math.random() * 2 - 1).toFixed(2);
    const randomY = (Math.random() * 2 - 1).toFixed(2);
    
   
    particle.style.setProperty('--random-x', randomX);
    particle.style.setProperty('--random-y', randomY);
    
 
    const randomDelay = Math.floor(Math.random() * 10);
    const randomDuration = 10 + Math.floor(Math.random() * 10);
    
    particle.style.animationDelay = `${randomDelay}s`;
    particle.style.animationDuration = `${randomDuration}s`;
  });
});
