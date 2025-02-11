document.getElementById('userInput').addEventListener('input', function() {
  const surpriseContainer = document.getElementById('surpriseContainer');
  surpriseContainer.style.display = 'block';

  // Add hearts
  const heartsContainer = document.getElementById('hearts');
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartsContainer.appendChild(heart);
  }

  // Add dancing cats
  const dancingCatsContainer = document.getElementById('dancingCats');
  const catGifs = [
    'images/cat-dance1.gif',
    'images/cat-dance2.gif',
    'images/cat-dance3.gif',
  ];
  catGifs.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif;
    dancingCatsContainer.appendChild(img);
  });
});