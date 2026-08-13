document.addEventListener('DOMContentLoaded', () => {
  // Lazy-load gallery images and generate simple captions from filename
  document.querySelectorAll('.gallery-image').forEach(img => {
    // set lazy loading
    img.setAttribute('loading', 'lazy');

    // if data-caption not provided, generate from filename
    if (!img.dataset.caption || img.dataset.caption.trim() === '') {
      try {
        const parts = img.src.split('/');
        const filename = parts[parts.length-1];
        const name = filename.replace(/\.[^/.]+$/, '');
        const caption = name.replace(/[_-]+/g, ' ').replace(/\b(img|IMG|photo|image)\b/gi, '').trim();
        if (caption) {
          img.dataset.caption = caption;
          // set alt for accessibility if alt is generic
          if (!img.alt || img.alt.match(/^\s*Event Photo/i)) img.alt = caption;
        }
      } catch (e) {
        // ignore
      }
    }
  });
});
