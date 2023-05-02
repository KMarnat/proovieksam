/*
when button is pressed:
1. button disappears
2. fitler class toggle off
3. controls visible
4. video plays

when paused
1. button appears
2. filter class toggle on
3. controls invisible
4. video pause
*/

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
