var count = 0

var json = {
  score: '',
  cursor: '',
  loader: '',
  internet_explorer: '',
  click_value:'1'
}

if (localStorage.getItem('json')) {
  json = JSON.parse(localStorage.getItem('json'));
  }

function resetScore(count) {
  document.getElementById('score').innerText = count;
}
function addCount(point) {
  const cursor_lock = document.getElementById('cursor-lock');
  const loader_lock = document.getElementById('loader-lock');
  const internet_explorer_lock = document.getElementById('internet-explorer-lock');

  count += point;

  if (count >= 40 && !cursor_lock.classList.contains('hidden')) {
    cursor_lock.classList.add('hidden');
  }
  if (count >= 100 && !loader_lock.classList.contains('hidden')) {
    loader_lock.classList.add('hidden');
  }
  if (count >= 200 && !internet_explorer_lock.classList.contains('hidden')) {
    internet_explorer_lock.classList.add('hidden');
  }
}

function removeCount(point) {
  const cursor_lock = document.getElementById('cursor-lock');
  const loader_lock = document.getElementById('loader-lock');
  const internet_explorer_lock = document.getElementById('internet-explorer-lock');
    count -= point;
    resetScore(count);
    console.log("remove", count);

    if (count < 40 && cursor_lock.classList.contains('hidden')) {
      cursor_lock.classList.remove('hidden');
    }

    if (count < 100 && loader_lock.classList.contains('hidden')) {
      loader_lock.classList.remove('hidden');
    }

    if (count < 200 && internet_explorer_lock.classList.contains('hidden')) {
      internet_explorer_lock.classList.remove('hidden');
    }
}

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
  //string to int

  addCount(parseInt(json.click_value));
  resetScore(count)
}

function shopHandler(item) {
  console.log('item', item);
  if (item === 'cursor' && count >= 40) {
    removeCount(40);
    json.cursor++;
  }
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
const cursor_shop = document.getElementById('cursor-shop');
const loader_shop = document.getElementById('loader-shop');
const internet_explorer_shop = document.getElementById('internet-explorer-shop');

mainElement.addEventListener('click', function(event) {
  clickHandler(event);
});

cursor_shop.addEventListener('click', function() {
  shopHandler('cursor');
});

loader_shop.addEventListener('click', function() {
  shopHandler('loader');
});

internet_explorer_shop.addEventListener('click', function() {
  shopHandler('internet-explorer');
});


