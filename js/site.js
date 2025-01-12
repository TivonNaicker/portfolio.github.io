/*
document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    const modalTitle = document.getElementById('videoModalLabel');
    const videoIframe = document.getElementById('videoIframe');
    const videoDescription = document.getElementById('videoDescription');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const src = button.getAttribute('data-src');
            const description = button.getAttribute('data-description');

            modalTitle.textContent = title;
            videoIframe.src = src;
            videoDescription.textContent = description;
        });
    });

    // Clear video src when modal is hidden
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
        videoIframe.src = '';
    });
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('videoElement');
    const videoDescription = document.getElementById('videoDescription');
    const videoModalLabel = document.getElementById('videoModalLabel');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            const src = button.getAttribute('data-src');
            const description = button.getAttribute('data-description');

            videoModalLabel.textContent = title;
            videoElement.querySelector('source').setAttribute('src', 'https://raw.githubusercontent.com/TivonNaicker/portfolio.github.io/css/Media/scarlet.mp4');
            videoElement.load(); // Reload the video with the new source
            videoDescription.textContent = description;
        });
    });
});
