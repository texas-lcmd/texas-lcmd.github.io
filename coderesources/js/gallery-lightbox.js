document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = modal.querySelector('.close');
    const prevBtn = modal.querySelector('.modal-prev');
    const nextBtn = modal.querySelector('.modal-next');

    let currentImages = [];
    let currentIndex = 0;

    function openModal(images, index) {
        currentImages = images;
        currentIndex = index;
        const img = currentImages[currentIndex];
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        // captions intentionally not shown
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function showIndex(i) {
        if (!currentImages.length) return;
        currentIndex = (i + currentImages.length) % currentImages.length;
        const img = currentImages[currentIndex];
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        // captions intentionally not shown
    }

    // delegate images per semester
    document.querySelectorAll('.semester').forEach(section => {
        const images = Array.from(section.querySelectorAll('.gallery-image'));
        images.forEach((img, idx) => {
            img.dataset.galleryIndex = idx;
            img.addEventListener('click', (e) => {
                // create a lightweight array of image elements for this section
                const imgs = Array.from(section.querySelectorAll('.gallery-image'));
                openModal(imgs, idx);
            });
        });
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', () => showIndex(currentIndex - 1));
    nextBtn.addEventListener('click', () => showIndex(currentIndex + 1));

    // click outside image closes
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'flex') return;
        if (e.key === 'ArrowLeft') showIndex(currentIndex - 1);
        if (e.key === 'ArrowRight') showIndex(currentIndex + 1);
        if (e.key === 'Escape') closeModal();
    });
});
