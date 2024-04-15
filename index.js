var count = 0


function clickHandler(event) {
  const img = document.createElement('img');
  img.src = 'image/cursor3.png';
  img.style.position = 'absolute';
  img.classList.add('animate-move-up');
  img.style.left = `${event.clientX}px`;
  img.style.top = `${event.clientY}px`;
  document.body.appendChild(img);
  //je veux supprimer l'image au bout de 2s
  setTimeout(() => {
    img.remove();
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.style.cursor = 'none';
  const cursorImage = document.createElement('img');
  cursorImage.src = 'image/cursor3.png';
  cursorImage.style.position = 'absolute';
  cursorImage.style.pointerEvents = 'none';
  cursorImage.style.zIndex = '1000';
  document.body.appendChild(cursorImage);

  document.addEventListener('mousemove', function(event) {
    cursorImage.style.left = `${event.clientX}px`;
    cursorImage.style.top = `${event.clientY}px`;
  });
});


const mainElement = document.querySelector('main');

mainElement.addEventListener('click', function(event) {
  clickHandler(event);
});