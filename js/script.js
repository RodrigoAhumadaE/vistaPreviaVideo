function playVideo(){
  let video = document.querySelector(".video");
  video.playbackRate = 5;
  video.play();
}
function stopVideo(){
  let video = document.querySelector(".video");
  video.pause();
}
