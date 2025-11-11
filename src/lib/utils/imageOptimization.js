/**
 * ImageKit Optimized Image Component
 * Provides responsive images with automatic optimization
 */

/**
 * Generate ImageKit URL with transformations
 * @param {string} imagePath - The path to the image (e.g., "tosinmakanjuola/gallery/portfolio-image-1.jpg")
 * @param {Object} options - Transformation options
 * @returns {string} - Optimized ImageKit URL
 */
export function getOptimizedImageUrl(imagePath, options = {}) {
  const baseUrl = 'https://ik.imagekit.io/jidemobell2025';
  
  const {
    width,
    height,
    quality = 80,
    format = 'auto',
    crop = 'maintain_ratio',
    focus = 'auto',
    blur,
    progressive = true
  } = options;

  let transformations = [];

  // Add transformations
  if (width) transformations.push(`w-${width}`);
  if (height) transformations.push(`h-${height}`);
  if (quality) transformations.push(`q-${quality}`);
  if (format) transformations.push(`f-${format}`);
  if (crop) transformations.push(`c-${crop}`);
  if (focus) transformations.push(`fo-${focus}`);
  if (blur) transformations.push(`bl-${blur}`);
  if (progressive) transformations.push('pr-true');

  const transformString = transformations.length > 0 ? `tr:${transformations.join(',')}` : '';
  
  return `${baseUrl}/${transformString}/${imagePath}`;
}

/**
 * Generate responsive image srcset for different screen sizes
 * @param {string} imagePath - The path to the image
 * @param {Object} options - Base transformation options
 * @returns {string} - Srcset string
 */
export function getResponsiveSrcSet(imagePath, options = {}) {
  const sizes = [320, 480, 768, 1024, 1200, 1920];
  
  return sizes.map(size => {
    const url = getOptimizedImageUrl(imagePath, { ...options, width: size });
    return `${url} ${size}w`;
  }).join(', ');
}

/**
 * Get sizes attribute for responsive images
 * @param {string} type - Image type (gallery, hero, thumbnail, etc.)
 * @returns {string} - Sizes string
 */
export function getImageSizes(type = 'default') {
  const sizeMap = {
    hero: '100vw',
    gallery: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 150px',
    about: '(max-width: 768px) 100vw, 50vw',
    default: '100vw'
  };
  
  return sizeMap[type] || sizeMap.default;
}
