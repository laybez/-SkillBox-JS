document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullImage = document.getElementById('fullImage');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imgSrc = thumbnail.src;
            fullImage.src = imgSrc;
        });
    });
});