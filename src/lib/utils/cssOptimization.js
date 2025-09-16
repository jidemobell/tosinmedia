/**
 * CSS Background Image Optimization Utility
 * Generates optimized CSS for background images using ImageKit
 */

/**
 * Generate optimized CSS background-image for different screen sizes
 * @param {string} imagePath - The path to the image
 * @param {Object} options - Optimization options
 * @returns {string} - CSS media queries with optimized background images
 */
export function generateResponsiveCSS(imagePath, options = {}) {
  const { quality = 80, format = 'webp' } = options;
  
  const breakpoints = [
    { size: 320, media: '(max-width: 480px)' },
    { size: 768, media: '(min-width: 481px) and (max-width: 768px)' },
    { size: 1024, media: '(min-width: 769px) and (max-width: 1024px)' },
    { size: 1920, media: '(min-width: 1025px)' }
  ];

  return breakpoints.map(bp => {
    const optimizedUrl = `https://ik.imagekit.io/jidemobell2025/tr:w-${bp.size},q-${quality},f-${format}/${imagePath}`;
    return `@media ${bp.media} {
  .bg-image { background-image: url('${optimizedUrl}'); }
}`;
  }).join('\n');
}

/**
 * Update CSS file with optimized background images
 * @param {string} cssContent - Original CSS content
 * @param {Array} imageMap - Array of { selector, imagePath, options }
 * @returns {string} - Updated CSS content
 */
export function optimizeBackgroundImages(cssContent, imageMap) {
  let updatedCSS = cssContent;
  
  imageMap.forEach(({ selector, imagePath, options = {} }) => {
    const { quality = 80, format = 'webp' } = options;
    
    // Generate optimized URL
    const optimizedUrl = `https://ik.imagekit.io/jidemobell2025/tr:q-${quality},f-${format}/${imagePath}`;
    
    // Replace in CSS
    const regex = new RegExp(`(${selector}\\s*{[^}]*background-image:\\s*url\\()[^)]+\\)`, 'g');
    updatedCSS = updatedCSS.replace(regex, `$1${optimizedUrl})`);
  });
  
  return updatedCSS;
}
