'use strict';

const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('video');

video.controls = false;

//when video is playing, the poster image dissapears, brightness is 100%, and controls are visible
function playVideo() {
  video.classList.toggle('bright-filter');
  video.controls = true;
  playBtn.classList.add('hidden');
  video.play();
}

//when video is paused, the custom button appears, video goes a bit darker, and controls are hidden
function pauseVideo() {
  video.classList.toggle('bright-filter');
  video.controls = false;
  playBtn.classList.remove('hidden');
}

video.addEventListener('pause', pauseVideo);
playBtn.addEventListener('click', playVideo);

///////////////////////////////////////////////////////////
// Scroll-down button function
const btnScrollDown = document.querySelector('.scroll-down');
const firstSection = document.querySelector('.introduction');

function scrollDown(e) {
  // getBoudingClientRect() function gives info about element size and it's position
  const secOneCoords = firstSection.getBoundingClientRect();

  window.scrollTo({
    // Scrolling to first section, even if already scrolled to middle of hero
    // Top of the 1st section to the top of the viewport + current scroll position
    left: secOneCoords.left + window.scrollX,
    top: secOneCoords.top + window.scrollY,
    behavior: 'smooth',
  });
}

btnScrollDown.addEventListener('click', scrollDown);
