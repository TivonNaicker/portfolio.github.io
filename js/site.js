
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
