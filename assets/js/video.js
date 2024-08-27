document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-file');
    const playPauseButton = document.getElementById('play-pause-button');
    const fullscreenButton = document.getElementById('fullscreen-button');

    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseButton.innerHTML = '<i class="ri-pause-line"></i> Pause';
        } else {
            video.pause();
            playPauseButton.innerHTML = '<i class="ri-play-line"></i> Play';
        }
    });

    fullscreenButton.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});
