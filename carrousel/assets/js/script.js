const imgMarvel = document.querySelectorAll('.marvel');
const imgAnimations = document.querySelectorAll('.animations');

const leftMarvel = document.querySelector('.marvel-btn-left');
const rightMarvel = document.querySelector('.marvel-btn-right');

const leftAnimations = document.querySelector('.animations-btn-left');
const rightAnimations = document.querySelector('.animations-btn-right');

let marvelIndex = 0;
let animationsIndex = 0;

function showImage(images, index) {
  images.forEach((img, i) => {
    img.hidden = i !== index;
  });
}

function setupCarousel(buttonLeft, buttonRight, images, indexVar) {
  buttonLeft.addEventListener('click', () => {
    if (indexVar === 'marvel') {
      marvelIndex = marvelIndex > 0 ? marvelIndex - 1 : images.length - 1;
      showImage(images, marvelIndex);
    } else if (indexVar === 'animations') {
      animationsIndex =
        animationsIndex > 0 ? animationsIndex - 1 : images.length - 1;
      showImage(images, animationsIndex);
    }
  });

  buttonRight.addEventListener('click', () => {
    if (indexVar === 'marvel') {
      marvelIndex = marvelIndex < images.length - 1 ? marvelIndex + 1 : 0;
      showImage(images, marvelIndex);
    } else if (indexVar === 'animations') {
      animationsIndex =
        animationsIndex < images.length - 1 ? animationsIndex + 1 : 0;
      showImage(images, animationsIndex);
    }
  });

  if (indexVar === 'marvel') {
    showImage(images, marvelIndex);
  } else if (indexVar === 'animations') {
    showImage(images, animationsIndex);
  }
}

setupCarousel(leftMarvel, rightMarvel, imgMarvel, 'marvel');
setupCarousel(leftAnimations, rightAnimations, imgAnimations, 'animations');
