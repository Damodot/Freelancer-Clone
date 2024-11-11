    // Array of video URLs
    const videos = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];
    let videoIndex = 0;  // Start from the first video

    const videoElement = document.getElementById('bg-video');
    const sourceElement = document.getElementById('videoSource');

    // Function to load the next video
    function playNextVideo() {
        videoIndex = (videoIndex + 1) % videos.length; // Loop back to the first video if at the end of the array
        sourceElement.src = videos[videoIndex];
        videoElement.load(); // Reload the new video source
        videoElement.play(); // Play the next video
    }

    // Event listener for when the video ends
    videoElement.addEventListener('ended', playNextVideo);

    // Ensure autoplay works across different devices/browsers
    videoElement.play().catch((error) => {
        console.error('Error with autoplay: ', error);
    });